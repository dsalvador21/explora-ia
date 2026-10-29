import { visibleLessons } from '../data/lessons'
import { Icon } from '../components/Icon'
import { LessonGrid } from '../components/LessonCard'

export function ClassesPage() {
  return (
    <section className="classes-page" aria-labelledby="classes-title">
      <header className="page-intro reveal">
        <span className="eyebrow-pill"><Icon name="spark" /> Un paso a la vez</span>
        <h1 id="classes-title">Clases para <span className="highlight highlight-purple">crear con IA.</span></h1>
        <p>Empieza por lo básico, organiza tus ideas y descubre cómo llevarlas a la web.</p>
        <span className="example-note">{visibleLessons.length} clases para explorar</span>
      </header>
      <LessonGrid />
    </section>
  )
}
