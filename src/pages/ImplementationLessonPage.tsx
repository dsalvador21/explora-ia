import type { Lesson } from '../data/lessons'
import { LessonHeader } from '../components/LessonHeader'
import { Icon } from '../components/Icon'
import { ToolLink } from '../components/design/ToolLink'
import { AIToolsOverview } from '../components/implementation/AIToolsOverview'
import { ImplementationPrompts, HelpPrompts } from '../components/implementation/ImplementationPrompts'
import { WebLanguagesDemo } from '../components/implementation/WebLanguagesDemo'

const stops = [
  ['implementation-review', 'Retomar'], ['web-languages', 'Comprender'], ['ai-tools', 'Explorar la IA'],
  ['implementation-workshop', 'Implementar'], ['implementation-help', 'Pedir ayuda'], ['implementation-save', 'Guardar'],
]

export function ImplementationLessonPage({ lesson }: { lesson: Lesson }) {
  return (
    <article className={`lesson-page planning-lesson implementation-lesson theme-${lesson.theme}`} aria-labelledby="lesson-title">
      <LessonHeader lesson={lesson} />
      <nav className="implementation-route" aria-label="Recorrido de la Clase 4">{stops.map(([id, label], index) => <a key={id} href={`#${id}`}><span aria-hidden="true">0{index + 1}</span>{label}</a>)}</nav>
      <div className="planning-sections">
        <section id="implementation-review" className="lesson-panel reveal" aria-labelledby="implementation-review-title">
          <span className="section-kicker">// 01 · RETOMEMOS NUESTRAS IDEAS</span>
          <h2 id="implementation-review-title">¿Te falta terminar el diseño?</h2>
          <p>Antes de programar, necesitamos saber qué queremos construir y cómo se verá.</p>
          <div className="grid gap-5 md:grid-cols-2 implementation-info-grid">
            <div><h3>Clase 2 — Requerimientos</h3><p>Definan el objetivo y lo que debe hacer su sitio.</p><a className="lesson-link" href="/clases/planificacion-y-requerimientos#copy-prompts-title">Ver prompts de la Clase 2 <Icon name="arrow" /></a></div>
            <div><h3>Clase 3 — Diseño</h3><p>Elijan un estilo y preparen su prototipo en Stitch.</p><a className="lesson-link" href="/clases/diseno-de-sitios-web-con-ia#design-workshop-title">Ver prompts de la Clase 3 <Icon name="arrow" /></a></div>
          </div>
          <div className="implementation-note"><h3>Lo mínimo para comenzar hoy</h3><ul className="implementation-list"><li>Al menos <strong>3 requerimientos definidos</strong>.</li><li>Al menos <strong>una vista diseñada</strong> del sitio web.</li></ul></div>
          <a className="text-link" href="#implementation-workshop">¿Ya completaron ambas etapas? Ir a la implementación →</a>
        </section>

        <section id="web-languages" className="lesson-panel reveal" aria-labelledby="web-languages-title">
          <span className="section-kicker">// 02 · TRES LENGUAJES, UN EQUIPO</span>
          <h2 id="web-languages-title">¿Cómo se construye una página web?</h2>
          <p>Descubre qué hace cada lenguaje activando las opciones del ejemplo.</p>
          <WebLanguagesDemo />
          <p className="implementation-small">No necesitas memorizar código: la IA te ayudará a escribirlo y comprenderlo.</p>
        </section>

        <section id="ai-tools" className="lesson-panel reveal" aria-labelledby="ai-tools-title">
          <span className="section-kicker">// 03 · ELIGE CÓMO PEDIR AYUDA</span>
          <h2 id="ai-tools-title">Conoce las herramientas de IA</h2>
          <AIToolsOverview />
        </section>

        <section id="implementation-workshop" className="lesson-panel implementation-main-panel reveal" aria-labelledby="implementation-workshop-title">
          <span className="section-kicker">// 04 · MANOS AL CÓDIGO</span>
          <h2 id="implementation-workshop-title">¡Implementemos nuestro sitio web!</h2>
          <p>Transformaremos nuestros requerimientos y diseños en nuestra primera página web.</p>
          <ImplementationPrompts />
        </section>

        <section id="implementation-help" className="lesson-panel reveal" aria-labelledby="implementation-help-title">
          <span className="section-kicker">// 05 · PROBAR TAMBIÉN ES APRENDER</span>
          <h2 id="implementation-help-title">Prompts de ayuda</h2>
          <p>Copien la frase que necesiten en la misma conversación con la IA.</p>
          <HelpPrompts />
        </section>

        <section id="implementation-save" className="lesson-panel reveal" aria-labelledby="implementation-save-title">
          <span className="section-kicker">// 06 · GUARDEMOS LO QUE CONSTRUIMOS</span>
          <h2 id="implementation-save-title">¡Guardemos nuestros avances!</h2>
          <p>Guarden la <strong>carpeta completa del proyecto</strong> en Drive, incluyendo imágenes y otros archivos. No guarden solamente index.html.</p>
          <ToolLink tool="drive" />
        </section>
      </div>
    </article>
  )
}
