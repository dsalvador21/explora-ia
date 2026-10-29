import type { Lesson } from '../data/lessons'
import { Icon } from './Icon'

export function LessonHeader({ lesson, example = false }: { lesson: Lesson; example?: boolean }) {
  return (
    <>
      <a className="text-link" href="/clases">← Volver a las clases</a>
      <header className="page-intro reveal">
        <div className="flex items-center gap-4">
          <span className="lesson-icon"><Icon name={lesson.icon} /></span>
          <span className="section-kicker">// CLASE {lesson.number}</span>
        </div>
        <h1 id="lesson-title">{lesson.title}</h1>
        <p>{lesson.description}</p>
        {example && <span className="example-note">Contenido de ejemplo</span>}
      </header>
    </>
  )
}
