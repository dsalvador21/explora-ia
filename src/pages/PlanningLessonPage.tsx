import { LessonHeader } from '../components/LessonHeader'
import { RequirementChallenge } from '../components/planning/RequirementChallenge'
import { PromptBuilder } from '../components/planning/PromptBuilder'
import { PromptSteps } from '../components/planning/PromptSteps'
import type { Lesson } from '../data/lessons'

export function PlanningLessonPage({ lesson }: { lesson: Lesson }) {
  return (
    <article className={`lesson-page planning-lesson theme-${lesson.theme}`} aria-labelledby="lesson-title">
      <LessonHeader lesson={lesson} />
      <div className="planning-sections">
        <section className="lesson-panel reveal" aria-labelledby="requirements-title">
          <span className="section-kicker">// 01 · DEFINE LO QUE NECESITAS</span>
          <h2 id="requirements-title">¿Qué es un requerimiento?</h2>
          <p>Un requerimiento es una <strong>característica, necesidad o condición que un proyecto debe cumplir</strong>. En palabras simples: es algo que tu proyecto debe tener o poder hacer.</p>
          <RequirementChallenge />
        </section>

        <section className="lesson-panel reveal" aria-labelledby="prompt-guide-title">
          <span className="section-kicker">// 02 · CUÉNTALE BIEN TU IDEA A LA IA</span>
          <h2 id="prompt-guide-title">¿Cómo construir un buen prompt?</h2>
          <p>Un <strong>prompt</strong> es la pregunta o instrucción que le entregamos a una IA. Si explicas lo que necesitas y le das suficiente contexto, será más fácil obtener una respuesta útil.</p>
          <PromptBuilder />
        </section>

        <section className="lesson-panel reveal" aria-labelledby="copy-prompts-title">
          <span className="section-kicker">// 03 · DE LA IDEA AL PLAN</span>
          <h2 id="copy-prompts-title">Prompts para copiar</h2>
          <p>La IA propone opciones y ustedes toman las decisiones. Pueden pedir aclaraciones o cambios durante la conversación.</p>
          <PromptSteps />
        </section>
      </div>
    </article>
  )
}
