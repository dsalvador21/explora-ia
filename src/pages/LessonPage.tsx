import type { Lesson } from '../data/lessons'
import { LessonHeader } from '../components/LessonHeader'
import { PlanningLessonPage } from './PlanningLessonPage'
import { DesignLessonPage } from './DesignLessonPage'

export function LessonPage({ lesson }: { lesson: Lesson }) {
  if (lesson.slug === 'planificacion-y-requerimientos') return <PlanningLessonPage lesson={lesson} />

  if (lesson.slug === 'diseno-de-sitios-web-con-ia') return <DesignLessonPage lesson={lesson} />

  return (
    <article className={`lesson-page theme-${lesson.theme}`} aria-labelledby="lesson-title">
      <LessonHeader lesson={lesson} example />
      <section className="lesson-panel objective-panel reveal" aria-labelledby="objective-title">
        <span className="section-kicker">// EL PUNTO DE PARTIDA</span>
        <h2 id="objective-title">Objetivo de la clase</h2>
        <p>{lesson.objective}</p>
      </section>
      <div className="lesson-content-grid grid gap-7 lg:grid-cols-[1.6fr_1fr]">
        <section className="lesson-panel reveal" aria-labelledby="activities-title">
          <h2 id="activities-title">Actividades</h2>
          <ol className="activity-list">
            {lesson.activities.map((activity, index) => <li key={activity}><span className="activity-number" aria-hidden="true">{index + 1}</span><p>{activity}</p></li>)}
          </ol>
        </section>
        <section className="lesson-panel reveal" aria-labelledby="materials-title">
          <h2 id="materials-title">Materiales</h2>
          <p>Ten a mano lo siguiente:</p>
          <ul className="materials-list">{lesson.materials.map(material => <li key={material}>{material}</li>)}</ul>
          <span className="card-note">¡Listo para explorar!</span>
        </section>
      </div>
    </article>
  )
}
