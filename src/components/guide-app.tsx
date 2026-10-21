import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Dumbbell,
  Heart,
  House,
  Info,
  Leaf,
  ListChecks,
  Moon,
  PartyPopper,
  Plate,
  Salad,
  Search,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Sun,
  Utensils,
  UtensilsCrossed,
  Water,
  Waves,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { disclaimer, exercises, partyTips, planDays, recipes } from "@/data/guide";
import { exchangeMeals, getMealCodesForDay, getWeeklyShopping, type MealKey } from "@/lib/guide-logic";
import {
  useDayProgress,
  useFavorites,
  useMealOverrides,
  useProfile,
  useShoppingState,
  type DayProgressState,
} from "@/hooks/use-guide-state";

const meals: Array<{ key: MealKey; label: string; icon: typeof Sun }> = [
  { key: "B", label: "Pequeno-almoço", icon: Sun },
  { key: "L", label: "Almoço", icon: Utensils },
  { key: "D", label: "Jantar", icon: Moon },
  { key: "S", label: "Lanche", icon: Waves },
];

const navItems = [
  { label: "Hoje", to: "/", icon: House },
  { label: "O meu dia", to: "/day", icon: ListChecks },
  { label: "Receitas", to: "/recipes", icon: BookOpen },
  { label: "Exercícios", to: "/exercises", icon: Activity },
  { label: "Compras", to: "/shopping", icon: ShoppingBasket },
] as const;

const emptyDayProgress: DayProgressState = {
  mealsDone: [],
  workoutDone: false,
  waterGlasses: 0,
  sleepOk: false,
  energy: 0,
  habitDone: false,
};

function currentGuideDay(startedAt?: string) {
  if (!startedAt) return 1;
  const started = new Date(`${startedAt}T00:00:00`);
  if (Number.isNaN(started.valueOf())) return 1;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.min(21, Math.max(1, Math.floor((today.getTime() - started.getTime()) / 86_400_000) + 1));
}

function mealByCode(code?: string) {
  return recipes.find((recipe) => recipe.code === code);
}

function exerciseByCode(code: string) {
  return exercises.find((exercise) => exercise.code === code);
}

function DisplayPhoto({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`photo-placeholder ${compact ? "photo-placeholder-compact" : ""}`} aria-label="Fotografia real ainda não disponível">
      <Plate aria-hidden="true" className="photo-placeholder-icon" />
      <span>Foto em breve</span>
    </div>
  );
}

function DisclaimerFooter() {
  return (
    <footer className="disclaimer-footer">
      <ShieldCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />
      <p>Conteúdo educativo. Não substitui aconselhamento médico ou nutricional.</p>
      <Link to="/about" className="footer-more">Ler aviso completo</Link>
    </footer>
  );
}

export function GuideShell({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useProfile();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const onAdmin = pathname.startsWith("/admin");

  function toggleDataSaver(enabled: boolean) {
    setProfile((current) => current ? { ...current, dataSaver: enabled } : current);
  }

  return (
    <div className="guide-shell">
      <header className="site-header">
        <div className="shell-width header-inner">
          <Link to="/" className="brand-lockup" aria-label="Método Metabolismo 40+, início">
            <span className="brand-mark"><Leaf aria-hidden="true" /></span>
            <span><strong>Método</strong><small>Metabolismo 40+</small></span>
          </Link>
          <nav aria-label="Navegação principal" className="desktop-nav">
            {navItems.map(({ label, to, icon: Icon }) => {
              const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
              return (
                <Link key={to} to={to} className={`nav-link ${active ? "nav-link-active" : ""}`}>
                  <Icon aria-hidden="true" />{label}
                </Link>
              );
            })}
          </nav>
          <div className="header-actions">
            <div className="data-saver-control">
              <span>Dados leves</span>
              <Switch checked={profile?.dataSaver ?? true} onCheckedChange={toggleDataSaver} aria-label="Modo poupança de dados" />
            </div>
            <Link to="/about" aria-label="Sobre e aviso de saúde" className="icon-link"><Info aria-hidden="true" /></Link>
          </div>
        </div>
      </header>

      <main className="shell-width page-main">{children}</main>
      <div className="shell-width"><DisclaimerFooter /></div>

      {!onAdmin && (
        <nav className="mobile-nav" aria-label="Navegação móvel">
          {navItems.map(({ label, to, icon: Icon }) => {
            const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
            return (
              <Link key={to} to={to} className={`mobile-nav-link ${active ? "mobile-nav-active" : ""}`} aria-current={active ? "page" : undefined}>
                <Icon aria-hidden="true" /><span>{label}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
}

export function OnboardingScreen() {
  const [profile, setProfile, ready] = useProfile();
  const [name, setName] = useState("");
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [dataSaver, setDataSaver] = useState(true);

  if (!ready || profile) return <GuideShell><LoadingState /></GuideShell>;

  function begin() {
    if (!ageConfirmed || !accepted) return;
    setProfile({
      name: name.trim(),
      ageConfirmed: true,
      disclaimerAcceptedAt: new Date().toISOString(),
      dataSaver,
      startedAt: new Date().toISOString().slice(0, 10),
    });
  }

  return (
    <GuideShell>
      <section className="welcome-screen">
        <div className="welcome-copy">
          <span className="eyebrow"><Sparkles aria-hidden="true" /> Um caminho possível, ao teu ritmo</span>
          <h1>Olá, amiga.<br /><span>Vamos com calma.</span></h1>
          <p>Vinte e um dias de refeições da nossa terra, movimento suave e pequenos hábitos para experimentar — sem pressa e sem promessas.</p>
          <div className="welcome-points">
            <span><CheckCircle2 aria-hidden="true" /> Comida de casa</span>
            <span><CheckCircle2 aria-hidden="true" /> Movimento sem equipamento</span>
            <span><CheckCircle2 aria-hidden="true" /> Passos simples para a rotina</span>
          </div>
        </div>
        <div className="onboarding-panel">
          <div className="onboarding-heading"><span className="section-icon"><Heart aria-hidden="true" /></span><div><p className="eyebrow">Antes de começarmos</p><h2>Um bocadinho sobre ti</h2></div></div>
          <label className="field-label" htmlFor="profile-name">Como te chamamos? <span>(opcional)</span></label>
          <Input id="profile-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="O teu nome" autoComplete="given-name" className="large-input" />
          <label className="consent-row">
            <Checkbox checked={ageConfirmed} onCheckedChange={(checked) => setAgeConfirmed(checked === true)} />
            <span>Confirmo que tenho 40 anos ou mais.</span>
          </label>
          <div className="medical-notice"><ShieldCheck aria-hidden="true" /><p>{disclaimer}</p></div>
          <label className="consent-row consent-row-top">
            <Checkbox checked={accepted} onCheckedChange={(checked) => setAccepted(checked === true)} />
            <span>Li o aviso e aceito que este conteúdo é apenas educativo.</span>
          </label>
          <div className="saver-option"><div><strong>Modo poupança de dados</strong><p>As fotografias só aparecem depois de serem carregadas.</p></div><Switch checked={dataSaver} onCheckedChange={setDataSaver} aria-label="Modo poupança de dados" /></div>
          <Button onClick={begin} disabled={!ageConfirmed || !accepted} size="lg" className="w-full action-button">
            Começar os 21 dias <ArrowRight aria-hidden="true" />
          </Button>
          <p className="local-save-note">A ligação à tua conta será activada quando a base de dados estiver ligada ao projecto.</p>
        </div>
      </section>
    </GuideShell>
  );
}

function LoadingState() {
  return <div className="loading-state" role="status"><span className="loading-dot" />A preparar o teu guia…</div>;
}

export function HomeScreen() {
  const [profile, setProfile, ready] = useProfile();
  const [progress] = useDayProgress();
  if (!ready) return <GuideShell><LoadingState /></GuideShell>;
  if (!profile) return <OnboardingScreen />;

  const dayNumber = currentGuideDay(profile.startedAt);
  const day = planDays.find((item) => item.day === dayNumber) ?? planDays[0];
  const completedHabits = Object.values(progress).filter((item) => item.habitDone).length;
  const displayName = profile.name ? `, ${profile.name}` : "";

  return (
    <GuideShell>
      <div className="dashboard-topline"><span className="eyebrow"><span className="live-dot" /> O teu cantinho</span><span className="region-note">Feito com carinho, em Angola</span></div>
      <section className="dashboard-hero">
        <div className="dashboard-greeting">
          <h1>Olá{displayName},<br /><span>vamos com calma.</span></h1>
          <p>Um dia de cada vez. Hoje já é um bom começo.</p>
          <Button asChild size="lg" className="action-button"><Link to="/day">Ver o meu dia <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
        <div className="day-feature">
          <div className="day-feature-head"><span>O TEU CAMINHO</span><span>21 dias</span></div>
          <div className="day-feature-body"><div><p className="day-kicker">Hoje</p><p className="day-number">Dia {dayNumber}<span> / 21</span></p><p className="day-focus"><Sun aria-hidden="true" />{day.focus}</p></div><ProgressRing value={completedHabits} /></div>
          <div className="day-feature-foot"><span>{day.habit}</span><Link to="/day" aria-label="Ver hábito de hoje"><ArrowRight aria-hidden="true" /></Link></div>
        </div>
      </section>
      <section className="section-block day-preview-section">
        <div className="section-heading"><div><p className="eyebrow">O dia sabe melhor com companhia</p><h2>Hoje no teu prato</h2></div><Link to="/recipes" className="text-link">Ver receitas <ArrowRight aria-hidden="true" /></Link></div>
        <div className="meal-preview-grid">{meals.map(({ key, label, icon: Icon }) => {
          const recipe = mealByCode(day.meals[key]);
          if (!recipe) return null;
          return <Link to="/recipes/$slug" params={{ slug: recipe.slug }} key={key} className="meal-preview"><DisplayPhoto compact /><div className="meal-preview-copy"><span><Icon aria-hidden="true" />{label}</span><strong>{recipe.title}</strong><small>{recipe.code}</small></div><ChevronRight aria-hidden="true" className="meal-preview-arrow" /></Link>;
        })}</div>
      </section>
      <section className="section-block quick-links-section">
        <div className="section-heading"><div><p className="eyebrow">À tua maneira</p><h2>Explora o guia</h2></div></div>
        <div className="quick-link-grid">
          <Link to="/plate" className="quick-link quick-link-green"><span className="quick-link-icon"><Salad aria-hidden="true" /></span><span><strong>O prato equilibrado</strong><small>Uma ideia simples para o prato raso</small></span><ArrowRight aria-hidden="true" /></Link>
          <Link to="/family" className="quick-link quick-link-coral"><span className="quick-link-icon"><PartyPopper aria-hidden="true" /></span><span><strong>Festas em família</strong><small>Pequenas dicas para os convívios</small></span><ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
      <div className="profile-reminder"><Info aria-hidden="true" /><span>O teu progresso fica guardado neste aparelho até a ligação à conta estar pronta.</span><Button variant="ghost" size="sm" onClick={() => setProfile(null)}>Recomeçar configuração</Button></div>
    </GuideShell>
  );
}

function ProgressRing({ value }: { value: number }) {
  const bounded = Math.min(21, value);
  const circumference = 2 * Math.PI * 34;
  const offset = circumference - (bounded / 21) * circumference;
  return <div className="progress-ring-wrap"><svg viewBox="0 0 84 84" role="img" aria-label={`${bounded} hábitos concluídos em 21`}><circle className="ring-track" cx="42" cy="42" r="34" /><circle className="ring-progress" cx="42" cy="42" r="34" strokeDasharray={circumference} strokeDashoffset={offset} /></svg><span><strong>{bounded}</strong><small>/ 21</small></span></div>;
}

export function DayScreen() {
  const [profile] = useProfile();
  const [progress, setProgress] = useDayProgress();
  const [overrides, setOverrides] = useMealOverrides();
  const [selectedDay, setSelectedDay] = useState(() => currentGuideDay(profile?.startedAt));
  const day = planDays.find((item) => item.day === selectedDay) ?? planDays[0];
  const codes = getMealCodesForDay(day.day, planDays, overrides);
  const check = progress[selectedDay] ?? emptyDayProgress;

  function updateCheck(updates: Partial<DayProgressState>) {
    setProgress((all) => ({ ...all, [selectedDay]: { ...(all[selectedDay] ?? emptyDayProgress), ...updates } }));
  }

  function exchangeWithAnotherDay(key: MealKey) {
    const other = planDays.find((item) => item.day !== selectedDay && mealByCode(getMealCodesForDay(item.day, planDays, overrides)?.[key]));
    if (!other || !codes) return;
    const otherCodes = getMealCodesForDay(other.day, planDays, overrides);
    const firstCode = codes[key];
    const secondCode = otherCodes?.[key];
    if (!firstCode || !secondCode) return;
    setOverrides((current) => exchangeMeals(current, selectedDay, other.day, key, firstCode, secondCode));
  }

  return (
    <GuideShell>
      <div className="page-heading"><div><p className="eyebrow">A tua rotina, sem pressa</p><h1>O meu dia</h1></div><div className="day-picker"><Button variant="outline" size="icon" aria-label="Dia anterior" onClick={() => setSelectedDay((value) => Math.max(1, value - 1))} disabled={selectedDay <= 1}><ChevronLeft /></Button><span>Dia <strong>{selectedDay}</strong> de 21</span><Button variant="outline" size="icon" aria-label="Dia seguinte" onClick={() => setSelectedDay((value) => Math.min(21, value + 1))} disabled={selectedDay >= 21}><ChevronRight /></Button></div></div>
      <section className="day-focus-band"><div className="focus-date"><span className="section-icon"><Sparkles aria-hidden="true" /></span><div><span className="eyebrow">FOCO DE HOJE</span><h2>{day.focus}</h2></div></div><p>{day.habit}</p></section>
      <section className="section-block"><div className="section-heading"><div><p className="eyebrow">Quatro momentos para ti</p><h2>As refeições de hoje</h2></div></div><div className="day-meal-list">{meals.map(({ key, label, icon: Icon }) => {
        const recipe = mealByCode(codes?.[key]);
        if (!recipe) return null;
        const isDone = check.mealsDone.includes(key);
        return <article key={key} className={`day-meal-row ${isDone ? "day-meal-done" : ""}`}><Checkbox checked={isDone} onCheckedChange={(checked) => updateCheck({ mealsDone: checked ? [...check.mealsDone, key] : check.mealsDone.filter((item) => item !== key) })} aria-label={`${label} concluído`} /><DisplayPhoto compact /><div className="day-meal-info"><span><Icon aria-hidden="true" />{label}</span><Link to="/recipes/$slug" params={{ slug: recipe.slug }}><strong>{recipe.title}</strong></Link><small>{recipe.code} · serve 4 pessoas</small></div><Button variant="outline" size="sm" onClick={() => exchangeWithAnotherDay(key)} title="Trocar esta refeição com outro dia"><UtensilsCrossed aria-hidden="true" /> Trocar prato</Button></article>;
      })}</div><p className="exchange-note">Ao trocar, o outro dia recebe o prato que estava aqui — assim a variedade dos 21 dias mantém-se.</p></section>
      <section className="daily-routine-grid"><div className="routine-panel"><div className="section-heading"><div><p className="eyebrow">Movimento de hoje</p><h2>{day.workout.minutes} minutos, ao teu ritmo</h2></div><Dumbbell aria-hidden="true" /></div><div className="exercise-chip-list">{day.workout.items.map((code: string) => code === "walk" ? <div className="exercise-chip" key={code}><Activity aria-hidden="true" /><span><strong>Caminhada tranquila</strong><small>Podes conversar enquanto caminhas</small></span></div> : (() => { const item = exerciseByCode(code); return item ? <Link key={code} to="/exercises/$slug" params={{ slug: item.slug }} className="exercise-chip"><Activity aria-hidden="true" /><span><strong>{item.title}</strong><small>{item.repsOrTime}</small></span><ArrowRight aria-hidden="true" /></Link> : null; })())}</div><label className="checkline"><Checkbox checked={check.workoutDone} onCheckedChange={(checked) => updateCheck({ workoutDone: checked === true })} /><span>Fiz o movimento que escolhi</span></label></div>
        <div className="routine-panel habit-panel"><div className="section-heading"><div><p className="eyebrow">Um hábito pequeno</p><h2>Água, sono e energia</h2></div><Waves aria-hidden="true" /></div><div className="water-control"><span>Copos de água</span><div className="stepper"><Button variant="outline" size="icon" aria-label="Retirar um copo de água" onClick={() => updateCheck({ waterGlasses: Math.max(0, check.waterGlasses - 1) })} disabled={check.waterGlasses <= 0}><ArrowDown /></Button><strong>{check.waterGlasses}<small> / 8</small></strong><Button variant="outline" size="icon" aria-label="Adicionar um copo de água" onClick={() => updateCheck({ waterGlasses: Math.min(8, check.waterGlasses + 1) })} disabled={check.waterGlasses >= 8}><ArrowUp /></Button></div></div><label className="checkline"><Checkbox checked={check.sleepOk} onCheckedChange={(checked) => updateCheck({ sleepOk: checked === true })} /><span>Dei espaço ao meu descanso</span></label><div className="energy-control"><span>Como está a tua energia?</span><div className="energy-options" role="group" aria-label="Nível de energia">{[1,2,3,4,5].map((level) => <Button key={level} variant={check.energy === level ? "default" : "outline"} size="icon" aria-label={`Energia ${level} de 5`} aria-pressed={check.energy === level} onClick={() => updateCheck({ energy: level })}>{level}</Button>)}</div></div><label className="checkline habit-checkline"><Checkbox checked={check.habitDone} onCheckedChange={(checked) => updateCheck({ habitDone: checked === true })} /><span>Experimentei o hábito de hoje</span></label></div></section>
      <div className="disclaimer-inline"><ShieldCheck aria-hidden="true" /><span>{disclaimer}</span></div>
    </GuideShell>
  );
}

export function RecipesScreen() {
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useFavorites();
  const filters = ["Todos", "Pequeno-almoço", "Almoço", "Jantar", "Lanche"];
  const visible = recipes.filter((recipe) => (filter === "Todos" || recipe.mealType.toLowerCase() === filter.toLowerCase()) && (!favoritesOnly || favorites.includes(recipe.code)) && `${recipe.title} ${recipe.code} ${recipe.ingredients.join(" ")}`.toLocaleLowerCase("pt-AO").includes(search.toLocaleLowerCase("pt-AO")));

  function toggleFavorite(code: string) {
    setFavorites((current) => current.includes(code) ? current.filter((item) => item !== code) : [...current, code]);
  }

  return <GuideShell><div className="page-heading"><div><p className="eyebrow">Receitas de casa, à nossa maneira</p><h1>Receitas</h1></div><span className="result-count">66 pratos</span></div><p className="page-lead">Ideias simples com ingredientes que conheces. Todas as quantidades são medidas de casa.</p><div className="recipe-tools"><label className="search-field"><Search aria-hidden="true" /><Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Procurar uma receita" aria-label="Procurar receita" /></label><Button variant={favoritesOnly ? "default" : "outline"} onClick={() => setFavoritesOnly((value) => !value)}><Heart aria-hidden="true" /> Favoritas</Button></div><div className="filter-row" role="group" aria-label="Filtrar refeições">{filters.map((label) => <Button key={label} variant={filter === label ? "default" : "outline"} size="sm" onClick={() => setFilter(label)}>{label}</Button>)}</div>{visible.length ? <div className="recipe-grid">{visible.map((recipe) => <article className="recipe-card" key={recipe.code}><Link to="/recipes/$slug" params={{ slug: recipe.slug }} className="recipe-card-link"><DisplayPhoto /><div className="recipe-card-copy"><span className="recipe-code">{recipe.code} <span>·</span> {recipe.mealType}</span><h2>{recipe.title}</h2><p>{recipe.ingredients.slice(0, 3).join(" · ")}</p><span className="recipe-open">Ver receita <ArrowRight aria-hidden="true" /></span></div></Link><Button variant="ghost" size="icon" className={`favorite-button ${favorites.includes(recipe.code) ? "favorite-active" : ""}`} aria-label={favorites.includes(recipe.code) ? `Remover ${recipe.title} das favoritas` : `Adicionar ${recipe.title} às favoritas`} onClick={() => toggleFavorite(recipe.code)}><Heart fill={favorites.includes(recipe.code) ? "currentColor" : "none"} /></Button></article>)}</div> : <EmptyState title="Ainda não tens receitas favoritas" description="Toca no coração de uma receita para a guardar aqui." />}</GuideShell>;
}

export function RecipeDetailScreen({ slug }: { slug: string }) {
  const recipe = recipes.find((item) => item.slug === slug);
  const [favorites, setFavorites] = useFavorites();
  if (!recipe) return <GuideShell><EmptyState title="Receita não encontrada" description="Escolhe outra receita da biblioteca." linkTo="/recipes" linkLabel="Ver receitas" /></GuideShell>;
  const isFavorite = favorites.includes(recipe.code);
  return <GuideShell><Link to="/recipes" className="back-link"><ChevronLeft aria-hidden="true" /> Todas as receitas</Link><div className="detail-layout"><div className="detail-photo-wrap"><DisplayPhoto /><span className="image-credit">Fotografia real ainda por carregar</span></div><article className="detail-copy"><span className="recipe-code">{recipe.code} <span>·</span> {recipe.mealType}</span><h1>{recipe.title}</h1><p className="serving-note"><Utensils aria-hidden="true" /> Preparado para 4 pessoas</p><Button variant={isFavorite ? "default" : "outline"} onClick={() => setFavorites((current) => isFavorite ? current.filter((item) => item !== recipe.code) : [...current, recipe.code])}><Heart fill={isFavorite ? "currentColor" : "none"} aria-hidden="true" />{isFavorite ? "Nas tuas favoritas" : "Guardar favorita"}</Button><section className="detail-section"><h2>O que vais precisar</h2><ul className="ingredient-list">{recipe.ingredients.map((ingredient, index) => <li key={`${ingredient}-${index}`}><Check aria-hidden="true" />{ingredient}</li>)}</ul></section><section className="detail-section"><h2>Como preparar</h2><ol className="step-list">{recipe.steps.map((step, index) => <li key={step}><span>{index + 1}</span><p>{step}</p></li>)}</ol></section>{recipe.lightVersionNote ? <div className="tip-band"><Leaf aria-hidden="true" /><div><strong>Uma ideia leve</strong><p>{recipe.lightVersionNote}</p></div></div> : null}{recipe.tip ? <div className="tip-band"><Info aria-hidden="true" /><div><strong>Dica da casa</strong><p>{recipe.tip}</p></div></div> : null}<div className="disclaimer-inline"><ShieldCheck aria-hidden="true" /><span>{disclaimer}</span></div></article></div></GuideShell>;
}

export function ExercisesScreen() {
  const [search, setSearch] = useState("");
  const visible = exercises.filter((exercise) => `${exercise.title} ${exercise.code}`.toLocaleLowerCase("pt-AO").includes(search.toLocaleLowerCase("pt-AO")));
  return <GuideShell><div className="page-heading"><div><p className="eyebrow">Movimento sem equipamento</p><h1>Exercícios</h1></div><span className="result-count">16 movimentos</span></div><p className="page-lead">Escolhe o movimento que combina com o teu dia. Podes fazer tudo devagar e parar quando precisares.</p><label className="search-field"><Search aria-hidden="true" /><Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Procurar um exercício" aria-label="Procurar exercício" /></label><div className="exercise-grid">{visible.map((exercise) => <Link to="/exercises/$slug" params={{ slug: exercise.slug }} className="exercise-card" key={exercise.code}><DisplayPhoto compact /><div><span className="recipe-code">{exercise.code} <span>·</span> {exercise.repsOrTime}</span><h2>{exercise.title}</h2><span className="recipe-open">Ver movimento <ArrowRight aria-hidden="true" /></span></div></Link>)}</div></GuideShell>;
}

export function ExerciseDetailScreen({ slug }: { slug: string }) {
  const exercise = exercises.find((item) => item.slug === slug);
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const [resting, setResting] = useState(false);
  const wakeRef = useRef<{ release: () => Promise<void> } | null>(null);
  const duration = Math.max(60, exercise ? exercise.minutes * 60 : 60);

  useEffect(() => {
    if (!running || remaining <= 0) {
      if (running && remaining <= 0) setRunning(false);
      return;
    }
    const timer = window.setInterval(() => setRemaining((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [remaining, running]);

  useEffect(() => {
    if (!running || !("wakeLock" in navigator)) return;
    let cancelled = false;
    const extendedNavigator = navigator as Navigator & { wakeLock?: { request: (type: "screen") => Promise<{ release: () => Promise<void> }> } };
    void extendedNavigator.wakeLock?.request("screen").then((lock) => {
      if (cancelled) void lock.release();
      else wakeRef.current = lock;
    }).catch(() => undefined);
    return () => {
      cancelled = true;
      if (wakeRef.current) void wakeRef.current.release();
      wakeRef.current = null;
    };
  }, [running]);

  if (!exercise) return <GuideShell><EmptyState title="Movimento não encontrado" description="Escolhe outro exercício da biblioteca." linkTo="/exercises" linkLabel="Ver exercícios" /></GuideShell>;

  function startTimer(rest = false) {
    setResting(rest);
    setRemaining(rest ? 60 : duration);
    setRunning(true);
  }

  const clock = `${String(Math.floor(remaining / 60)).padStart(2, "0")}:${String(remaining % 60).padStart(2, "0")}`;
  return <GuideShell><Link to="/exercises" className="back-link"><ChevronLeft aria-hidden="true" /> Todos os exercícios</Link><div className="detail-layout exercise-detail-layout"><div className="detail-photo-wrap"><DisplayPhoto /><div className="image-credit">{exercise.code} · {exercise.repsOrTime}</div></div><article className="detail-copy"><span className="recipe-code">{exercise.code} <span>·</span> Movimento em casa</span><h1>{exercise.title}</h1><section className="detail-section"><h2>Como fazer</h2><ol className="step-list">{exercise.steps.map((step, index) => <li key={step}><span>{index + 1}</span><p>{step}</p></li>)}</ol></section><div className="exercise-safety"><ShieldCheck aria-hidden="true" /><p>{exercise.safetyNote}</p></div><div className="timer-panel"><div><span className="eyebrow">{resting ? "PAUSA" : "AO TEU RITMO"}</span><strong className="timer-clock">{clock}</strong><small>{remaining === 0 && !running ? "Escolhe quando começar" : resting ? "Descanso de um minuto" : exercise.repsOrTime}</small></div><div className="timer-actions"><Button size="lg" onClick={() => running ? setRunning(false) : startTimer(false)} className="action-button"><Clock3 aria-hidden="true" />{running ? "Pausar" : "Começar"}</Button><Button variant="outline" size="lg" onClick={() => startTimer(true)}>Descansar 1 min</Button></div></div><div className="disclaimer-inline"><ShieldCheck aria-hidden="true" /><span>{disclaimer}</span></div></article></div></GuideShell>;
}

export function PlateScreen() {
  return <GuideShell><div className="page-heading"><div><p className="eyebrow">Uma ajuda visual, sem complicar</p><h1>O prato equilibrado</h1></div><span className="result-count">Prato raso</span></div><p className="page-lead">Uma maneira simples de pensar nas porções — ajusta ao que tens em casa e ao que te sabe bem.</p><section className="plate-guide"><div className="plate-visual" role="img" aria-label="Metade do prato com legumes, um quarto com proteína e um quarto com funge, mandioca ou batata-doce"><div className="plate-half"><Salad aria-hidden="true" /><strong>Metade</strong><span>Kizaca, gimboa<br />ou legumes</span></div><div className="plate-quarter plate-protein"><span className="plate-mark">¼</span><strong>Proteína</strong><span>Peixe, frango,<br />ovo ou feijão</span></div><div className="plate-quarter plate-staple"><span className="plate-mark">¼</span><strong>Farinhas</strong><span>Funge, mandioca<br />ou batata-doce</span></div></div><div className="plate-notes"><span className="eyebrow">Uma referência, não uma regra</span><h2>O que conta é o equilíbrio possível.</h2><p>Usa o prato raso como guia visual. Aproveita os alimentos da época e adapta a refeição à tua família e à tua realidade.</p><Button asChild variant="outline"><Link to="/recipes">Encontrar uma receita <ArrowRight aria-hidden="true" /></Link></Button></div></section><div className="plate-footnote"><Info aria-hidden="true" /><span>As necessidades variam. Se tens uma condição de saúde, conversa com um profissional de saúde.</span></div></GuideShell>;
}

export function ShoppingScreen() {
  const [week, setWeek] = useState(1);
  const [state, setState] = useShoppingState();
  const rows = useMemo(() => getWeeklyShopping(week, planDays, recipes), [week]);
  const total = rows.reduce((sum, row) => sum + (Number(state.prices[`${row.category}|${row.name}`]) || 0), 0);
  const categories = [...new Set(rows.map((row) => row.category))];

  function toggleChecked(key: string, checked: boolean) {
    setState((current) => ({ ...current, checked: checked ? [...current.checked, key] : current.checked.filter((item) => item !== key) }));
  }

  function setPrice(key: string, value: string) {
    setState((current) => ({ ...current, prices: { ...current.prices, [key]: value } }));
  }

  return <GuideShell><div className="page-heading"><div><p className="eyebrow">Da semana para o mercado</p><h1>Lista de compras</h1></div><div className="week-selector"><Button variant="outline" size="icon" aria-label="Semana anterior" onClick={() => setWeek((value) => Math.max(1, value - 1))} disabled={week <= 1}><ChevronLeft /></Button><span>Semana <strong>{week}</strong></span><Button variant="outline" size="icon" aria-label="Semana seguinte" onClick={() => setWeek((value) => Math.min(3, value + 1))} disabled={week >= 3}><ChevronRight /></Button></div></div><p className="page-lead">A lista acompanha as refeições da semana. Assinala o que já tens e acrescenta os preços do teu mercado.</p><div className="shopping-summary"><div><ShoppingBasket aria-hidden="true" /><span><strong>{rows.filter((row) => state.checked.includes(`${row.category}|${row.name}`)).length}</strong> itens assinalados</span></div><div><span>Total dos preços preenchidos</span><strong>{new Intl.NumberFormat("pt-AO").format(total)} Kz</strong></div></div>{categories.map((category) => <section className="shopping-category" key={category}><h2>{category}</h2>{rows.filter((row) => row.category === category).map((row) => { const key = `${row.category}|${row.name}`; const checked = state.checked.includes(key); return <div key={key} className={`shopping-row ${checked ? "shopping-row-checked" : ""}`}><Checkbox checked={checked} onCheckedChange={(value) => toggleChecked(key, value === true)} aria-label={`${row.name} comprado`} /><div className="shopping-name"><strong>{row.name}</strong><span>{row.qty === null || row.qty === 0 ? "Quantidade conforme a tua semana" : `${new Intl.NumberFormat("pt-AO").format(row.qty)} ${row.unit}`}</span></div><label className="price-field"><span>Preço (Kz)</span><Input inputMode="numeric" type="number" min="0" value={state.prices[key] ?? ""} onChange={(event) => setPrice(key, event.target.value)} aria-label={`Preço de ${row.name} em Kz`} placeholder="—" /></label></div>; })}</section>)}<p className="price-note"><Info aria-hidden="true" /> Os preços variam por mercado e época. Preenche os teus preços.</p></GuideShell>;
}

export function FamilyScreen() {
  return <GuideShell><div className="page-heading"><div><p className="eyebrow">Convívios à nossa maneira</p><h1>Festas e almoços</h1></div><span className="section-icon coral-icon"><PartyPopper aria-hidden="true" /></span></div><p className="page-lead">Estar com a família também faz parte da vida. Fica com algumas ideias sem culpa nem regras rígidas.</p><div className="family-intro"><PartyPopper aria-hidden="true" /><p>Escolhe o que gostas, desfruta da companhia e volta à tua rotina na refeição seguinte.</p></div><ol className="family-tips">{partyTips.map((tip, index) => <li key={tip}><span>{String(index + 1).padStart(2, "0")}</span><p>{tip}</p></li>)}</ol></GuideShell>;
}

export function AboutScreen() {
  return <GuideShell><div className="page-heading"><div><p className="eyebrow">Sobre o Método</p><h1>Um guia, não uma promessa</h1></div><span className="section-icon"><Leaf aria-hidden="true" /></span></div><p className="page-lead">O Método Metabolismo 40+ reúne ideias de refeições, movimento suave e pequenos hábitos para experimentar durante 21 dias.</p><section className="about-section"><h2>Importante saber</h2><p className="full-disclaimer">{disclaimer}</p></section><section className="about-section about-contact"><h2>Fala connosco</h2><p>O contacto WhatsApp será configurado quando os dados do projecto estiverem ligados.</p><Button disabled variant="outline"><Info aria-hidden="true" /> WhatsApp a configurar</Button></section><section className="about-section"><h2>Os teus dados</h2><p>Até a ligação à tua conta estar pronta, o teu nome e progresso ficam guardados neste aparelho. Depois da ligação, poderás guardar o teu perfil e progresso na tua conta.</p></section></GuideShell>;
}

export function PhotoAdminScreen() {
  const [search, setSearch] = useState("");
  const [kind, setKind] = useState("Todos");
  const { photoManifest } = requireGuideData();
  const visible = photoManifest.filter((photo) => (kind === "Todos" || photo.kind === (kind === "Receitas" ? "recipe" : "exercise")) && `${photo.code} ${photo.altTextPt} ${photo.searchQueryPt}`.toLocaleLowerCase("pt-AO").includes(search.toLocaleLowerCase("pt-AO")));
  return <GuideShell><div className="page-heading admin-heading"><div><p className="eyebrow">Biblioteca de fotografias reais</p><h1>Fotografias</h1></div><span className="result-count">0 de 82 carregadas</span></div><p className="page-lead">Cada receita e movimento tem um espaço reservado para uma fotografia real, com autorização e crédito.</p><div className="admin-connect-note"><ShieldCheck aria-hidden="true" /><div><strong>O envio será activado ao ligar a base de dados.</strong><p>As fotografias continuam vazias até serem enviadas e os créditos confirmados.</p></div></div><div className="recipe-tools"><label className="search-field"><Search aria-hidden="true" /><Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Procurar por código ou nome" aria-label="Procurar fotografia" /></label><div className="filter-row">{["Todos", "Receitas", "Exercícios"].map((value) => <Button key={value} variant={kind === value ? "default" : "outline"} size="sm" onClick={() => setKind(value)}>{value}</Button>)}</div></div><div className="photo-admin-list">{visible.map((photo) => <div className="photo-admin-row" key={photo.id}><DisplayPhoto compact /><div className="photo-admin-info"><span className="recipe-code">{photo.code} <span>·</span> {photo.kind === "recipe" ? "Receita" : "Exercício"}</span><strong>{photo.altTextPt}</strong><small>Pesquisa: {photo.searchQueryPt}</small><small>Crédito e licença: por preencher</small></div><span className="missing-badge">Em falta</span><Button variant="outline" disabled title="Liga a base de dados para enviar fotografias">Enviar</Button></div>)}</div></GuideShell>;
}

function requireGuideData() {
  // Kept as a function to make the manifest read-only in the public preview.
  return guideManifest;
}

import { photoManifest as guideManifest } from "@/data/guide";

function EmptyState({ title, description, linkTo, linkLabel }: { title: string; description: string; linkTo?: "/recipes" | "/exercises"; linkLabel?: string }) {
  return <div className="empty-state"><span className="section-icon"><BookOpen aria-hidden="true" /></span><h2>{title}</h2><p>{description}</p>{linkTo && linkLabel ? <Button asChild variant="outline"><Link to={linkTo}>{linkLabel} <ArrowRight aria-hidden="true" /></Link></Button> : null}</div>;
}