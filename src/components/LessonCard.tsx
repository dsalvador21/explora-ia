import type { CSSProperties } from 'react'
import { visibleLessons, type Lesson } from '../data/lessons'
import { Icon } from './Icon'

function LessonCard({ lesson, index }: { lesson: Lesson; index: number }) {
  return (
    <article className={`lesson-card theme-${lesson.theme} reveal`} style={{ '--delay': `${index * 100 + 150}ms` } as CSSProperties}>
      <div className="card-top flex items-start justify-between">
        <span className="lesson-icon"><Icon name={lesson.icon} /></span>
        <span className="lesson-number">/ {lesson.number}</span>
      </div>
      <span className="lesson-label">Clase {Number(lesson.number)}</span>
      <h3>{lesson.title}</h3>
      <p>{lesson.description}</p>
      <div className="flex flex-wrap gap-2 lesson-tags">{lesson.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="card-bottom flex items-center justify-between gap-2"><span className="card-note">{lesson.sticker}</span><a className="lesson-link" href={`/clases/${lesson.slug}`} aria-label={`Ver clase ${Number(lesson.number)}: ${lesson.title}`}>Ver clase <Icon name="arrow" /></a></div>
    </article>
  )
}

export function LessonGrid() {
  return <div className={`grid grid-cols-1 gap-7 ${visibleLessons.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>{visibleLessons.map((lesson, index) => <LessonCard key={lesson.slug} lesson={lesson} index={index} />)}</div>
}
