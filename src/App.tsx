import type { CSSProperties, ReactNode } from 'react'

type IconName = 'robot' | 'arrow' | 'spark' | 'plan' | 'code'

function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    robot: <><rect x="4" y="7" width="16" height="13" rx="4" /><path d="M12 3v4M1 12v4m22-4v4M8 16h8" /><circle cx="8.5" cy="12" r=".8" fill="currentColor" /><circle cx="15.5" cy="12" r=".8" fill="currentColor" /></>,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    spark: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" /><path d="M20 2v4m-2-2h4" /></>,
    plan: <><rect x="5" y="5" width="14" height="17" rx="2" /><rect x="9" y="2" width="6" height="6" rx="1" fill="currentColor" /><path d="m8 12 1 1 2-2m2 1h3m-8 5h8" /></>,
    code: <><rect x="2" y="3" width="20" height="18" rx="3" /><path d="M2 8h20m-14 4-3 3 3 3m8-6 3 3-3 3m-3-7-2 8" /></>,
  }
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function Brand() {
  return <span className="flex items-center gap-3"><span className="brand-icon"><Icon name="robot" /></span><span className="brand-word">Explora<span>IA</span></span></span>
}

function Navbar() {
  return (
    <header className="site-header">
      <div className="page-width flex items-center justify-between gap-4">
        <a href="#inicio" aria-label="ExploraIA, inicio"><Brand /></a>
        <nav aria-label="Navegación principal" className="flex items-center gap-2 sm:gap-3">
          <a className="nav-link" href="#inicio">Inicio</a>
          <a className="nav-link nav-classes" href="#clases">Clases <Icon name="arrow" /></a>
        </nav>
      </div>
    </header>
  )
}

function HeroIllustration() {
  return (
    <div className="hero-art" role="img" aria-label="Un robot sonriente rodeado de ideas, un plan y una ventana de código">
      <span className="art-orbit" />
      <span className="art-star star-one">✦</span><span className="art-star star-two">✦</span>
      <div className="idea-sticker"><Icon name="spark" /><span>¿Y si lo creamos?</span></div>
      <div className="code-window">
        <div className="window-bar"><span /><span /><span /><span className="window-caption">mi_primera_idea</span></div>
        <div className="robot-drawing">
          <svg viewBox="0 0 240 190" fill="none" aria-hidden="true">
            <path d="M120 41V25" stroke="#18181b" strokeWidth="4" /><circle cx="120" cy="20" r="8" fill="#FBBF24" stroke="#18181b" strokeWidth="3.5" />
            <rect x="32" y="80" width="25" height="42" rx="10" fill="#38BDF8" stroke="#18181b" strokeWidth="3.5" /><rect x="183" y="80" width="25" height="42" rx="10" fill="#38BDF8" stroke="#18181b" strokeWidth="3.5" />
            <rect x="53" y="46" width="139" height="118" rx="32" fill="#18181b" />
            <rect x="48" y="41" width="139" height="118" rx="32" fill="#38BDF8" stroke="#18181b" strokeWidth="3.5" />
            <rect x="65" y="65" width="105" height="64" rx="21" fill="#fff" stroke="#18181b" strokeWidth="3" />
            <path d="M84 92c0-12 15-12 15 0m35 0c0-12 15-12 15 0m-44 13q13 14 26 0" stroke="#18181b" strokeWidth="4" strokeLinecap="round" />
            <path d="M106 143h24" stroke="#18181b" strokeWidth="4" strokeLinecap="round" /><circle cx="78" cy="107" r="5" fill="#DDD6FE" /><circle cx="156" cy="107" r="5" fill="#DDD6FE" />
          </svg>
        </div>
        <div className="code-message"><span>&gt;</span> hola, mundo<span>_</span></div>
      </div>
      <span className="art-chip plan-chip"><Icon name="plan" /></span>
      <span className="art-chip code-chip"><Icon name="code" /></span>
      <span className="art-note">Tu curiosidad es el comienzo.</span>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero grid items-center gap-6 lg:grid-cols-[1.15fr_1fr]" aria-labelledby="welcome-title">
      <div className="hero-copy reveal">
        <span className="eyebrow-pill"><span className="status-dot" /> Un espacio para 7° básico</span>
        <h1 id="welcome-title">Las grandes ideas<br /> empiezan con un<br /><span className="highlight highlight-purple">¿y si…?</span> <span className="title-spark" aria-hidden="true">✳</span></h1>
        <p>¡Bienvenido a ExploraIA! Descubre la inteligencia artificial, dale forma a tus ideas y aprende a crear sitios web con IA. Paso a paso y con mucha curiosidad.</p>
        <a className="brutal-button" href="#clases">Explorar clases <Icon name="arrow" /></a>
        <div className="hero-footnote"><span aria-hidden="true">↳</span> No necesitas saber programar. ¡Solo tener ganas!</div>
      </div>
      <div className="reveal illustration-wrap"><HeroIllustration /></div>
    </section>
  )
}

type Lesson = { number: string; title: string; description: string; icon: IconName; theme: string; tags: string[]; sticker: string }

const lessons: Lesson[] = [
  { number: '01', title: 'Introducción a la inteligencia artificial', description: 'Descubre qué es la IA, dónde la encuentras en tu día a día y qué puedes hacer con ella.', icon: 'robot', theme: 'yellow', tags: ['Descubrir', 'Entender'], sticker: 'Todo parte aquí' },
  { number: '02', title: 'Planificación y requerimientos', description: 'Transforma una idea en un plan: define para quién crearás y qué necesita tu proyecto.', icon: 'plan', theme: 'purple', tags: ['Imaginar', 'Organizar'], sticker: '¡Dale forma a tu idea!' },
  { number: '03', title: 'Diseño de sitios web con IA', description: 'Explora cómo trabajar con la IA para convertir tu plan en el diseño de un sitio web.', icon: 'code', theme: 'cyan', tags: ['Diseñar', 'Crear'], sticker: 'De la idea a la web' },
]

function LessonCard({ lesson, index }: { lesson: Lesson; index: number }) {
  return (
    <article className={`lesson-card theme-${lesson.theme} reveal`} style={{ '--delay': `${index * 100 + 150}ms` } as CSSProperties}>
      <div className="card-top flex items-start justify-between">
        <span className="lesson-icon"><Icon name={lesson.icon} /></span>
        <span className="lesson-number">/ {lesson.number}</span>
      </div>
      <span className="lesson-label">Clase {index + 1}</span>
      <h3>{lesson.title}</h3>
      <p>{lesson.description}</p>
      <div className="flex flex-wrap gap-2 lesson-tags">{lesson.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="card-bottom flex items-center justify-between gap-2"><span className="card-note">{lesson.sticker}</span><span className="coming-soon">Próximamente</span></div>
    </article>
  )
}

function App() {
  return (
    <div id="inicio">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <main id="contenido" className="page-width">
        <Hero />
        <section id="clases" className="lessons-section" aria-labelledby="lessons-title">
          <div className="section-heading reveal">
            <div><span className="section-kicker">// APRENDE, IMAGINA, CREA</span><h2 id="lessons-title">Tu próxima <span className="highlight highlight-yellow">gran idea</span> empieza aquí.</h2><p>Tres clases para pasar de la curiosidad a la creación.</p></div>
            <span className="course-sticker"><Icon name="spark" /> ¡Vamos paso a paso!</span>
          </div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">{lessons.map((lesson, index) => <LessonCard key={lesson.number} lesson={lesson} index={index} />)}</div>
          <p className="availability-note">Estamos preparando las clases. Pronto podrás explorar cada una.</p>
        </section>
      </main>
      <footer className="site-footer"><div className="page-width flex flex-col items-center justify-between gap-5 sm:flex-row"><a href="#inicio" aria-label="ExploraIA, volver al inicio"><Brand /></a><p>Un espacio para aprender con curiosidad.<span>Hecho para estudiantes de 7° básico.</span></p><a className="back-top" href="#inicio">Volver arriba ↑</a></div></footer>
    </div>
  )
}

export default App
