import { LessonHeader } from '../components/LessonHeader'
import { PromptCard } from '../components/PromptCard'
import { ToolLink } from '../components/design/ToolLink'
import { DesignExamples } from '../components/design/DesignExamples'
import { DesignPromptSteps, ReviewPromptSteps } from '../components/design/DesignPromptSteps'
import { improvementGroups } from '../data/design'
import type { Lesson } from '../data/lessons'

export function DesignLessonPage({ lesson }: { lesson: Lesson }) {
  return (
    <article className={`lesson-page planning-lesson design-lesson theme-${lesson.theme}`} aria-labelledby="lesson-title">
      <LessonHeader lesson={lesson} />
      <div className="planning-sections">
        <section className="lesson-panel reveal" aria-labelledby="review-title">
          <span className="section-kicker">// 01 · ANTES DE DISEÑAR</span>
          <h2 id="review-title">Repaso de la clase anterior</h2>
          <p>Antes de diseñar, necesitamos saber qué queremos construir. Retomen su conversación con la IA y revisen la propuesta de su sitio.</p>
          <p className="design-callout"><strong>¡Importante!</strong> Cada grupo debe tener al menos cinco requerimientos claros antes de comenzar el diseño.</p>
          <ReviewPromptSteps />
        </section>

        <section className="lesson-panel reveal" aria-labelledby="software-design-title">
          <span className="section-kicker">// 02 · IMAGINA CÓMO SE VERÁ</span>
          <h2 id="software-design-title">¿Qué es el diseño de software?</h2>
          <p>Es la etapa donde decidimos <strong>cómo se verá y organizará nuestro sitio web antes de programarlo</strong>: sus colores, imágenes, páginas, botones y secciones.</p>
          <DesignExamples />
          <p>Un prototipo representa cómo podría verse y funcionar un sitio antes de programarlo.</p>
          <div className="design-tool-links"><ToolLink tool="gemini" /><ToolLink tool="stitch" /></div>
        </section>

        <section className="lesson-panel reveal" aria-labelledby="design-workshop-title">
          <span className="section-kicker">// 03 · DE LAS IDEAS AL PROTOTIPO</span>
          <h2 id="design-workshop-title">¡Diseñemos nuestro sitio web!</h2>
          <p className="design-callout"><strong>Usen los tres prompts en la misma conversación de Gemini.</strong> Así la IA podrá tener en cuenta sus requerimientos y las decisiones que ya tomaron.</p>
          <DesignPromptSteps />
        </section>

        <section className="lesson-panel reveal" aria-labelledby="improve-prototype-title">
          <span className="section-kicker">// 04 · PRUEBA, COMPARA, MEJORA</span>
          <h2 id="improve-prototype-title">¡Mejoremos nuestro prototipo!</h2>
          <p>La primera propuesta no tiene que ser la definitiva. Experimenten con diferentes versiones en Google Stitch y elijan la que mejor represente su idea.</p>
          <div className="improvement-groups">{improvementGroups.map(group => <details key={group.title} className="improvement-group"><summary>{group.title}<span aria-hidden="true">＋</span></summary><div className="grid gap-4 md:grid-cols-2 improvement-content">{group.prompts.map((prompt, index) => <PromptCard key={prompt} title={`Cambio ${index + 1}`} text={prompt} />)}</div></details>)}</div>
        </section>

        <section className="lesson-panel design-save-panel reveal" aria-labelledby="save-design-title">
          <span className="section-kicker">// 05 · QUE NO SE PIERDA NINGUNA IDEA</span>
          <h2 id="save-design-title">¡Guardemos nuestros avances!</h2>
          <div className="design-deliverables grid gap-4 sm:grid-cols-2"><div><span className="activity-number" aria-hidden="true">1</span><h3>Requerimientos</h3><p>Documento con al menos cinco requerimientos definitivos que expliquen qué debe tener o hacer su sitio web.</p></div><div><span className="activity-number" aria-hidden="true">2</span><h3>Prototipos visuales</h3><p>Imágenes o enlaces de los diseños generados.</p></div></div>
          <p>Guarden ambos entregables en la carpeta de su grupo.</p>
          <ToolLink tool="drive" />
          <p className="design-closing">¡Ya tenemos nuestro diseño! En las próximas clases comenzaremos a construirlo.</p>
        </section>
      </div>
    </article>
  )
}
