import { Icon } from '../components/Icon'
import { LessonGrid } from '../components/LessonCard'

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
        <a className="brutal-button" href="/clases">Explorar clases <Icon name="arrow" /></a>
        <div className="hero-footnote"><span aria-hidden="true">↳</span> No necesitas saber programar. ¡Solo tener ganas!</div>
      </div>
      <div className="reveal illustration-wrap"><HeroIllustration /></div>
    </section>
  )
}

export function HomePage() {
  return (
    <>
      <Hero />
      <section id="clases" className="lessons-section" aria-labelledby="lessons-title">
        <div className="section-heading reveal">
          <div><span className="section-kicker">// APRENDE, IMAGINA, CREA</span><h2 id="lessons-title">Tu próxima <span className="highlight highlight-yellow">gran idea</span> empieza aquí.</h2><p>Clases para pasar de la curiosidad a la creación.</p></div>
          <span className="course-sticker"><Icon name="spark" /> ¡Vamos paso a paso!</span>
        </div>
        <LessonGrid />
      </section>
    </>
  )
}
