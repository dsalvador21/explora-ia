import { useState, type CSSProperties } from 'react'
import { promptExamples } from '../../data/planning'
import { PromptCard } from '../PromptCard'

const elements = [
  { name: 'Objetivo', color: '#fde68a', question: '¿Qué quiero conseguir?', explanation: 'Explica qué necesitas lograr.', example: 'Crear una web sobre videojuegos.' },
  { name: 'Contexto', color: '#bae6fd', question: '¿Qué necesita saber la IA?', explanation: 'Cuenta quién eres y para quién es el proyecto.', example: 'Somos estudiantes de 7.º básico.' },
  { name: 'Instrucciones', color: '#ddd6fe', question: '¿Qué debe hacer exactamente?', explanation: 'Pide una acción concreta.', example: 'Danos cinco ideas.' },
  { name: 'Límites', color: '#fecdd3', question: '¿Qué condiciones debe respetar?', explanation: 'Aclara qué debe incluir o evitar.', example: 'Ideas sencillas con HTML y CSS.' },
  { name: 'Formato', color: '#bbf7d0', question: '¿Cómo quiero la respuesta?', explanation: 'Indica cómo organizar la información.', example: 'Una lista con explicaciones breves.' },
]

// Los fragmentos unidos conservan exactamente el prompt original que se copia.
export const annotatedPrompt = [
  { element: 1, text: 'Somos estudiantes de 7.º básico' },
  { element: 0, text: ' y queremos crear una página web sobre videojuegos.' },
  { element: 2, text: ' Danos cinco ideas' },
  { element: 3, text: ' sencillas con HTML y CSS.' },
  { element: 4, text: ' Explica cada una brevemente en una lista' },
]

export function PromptBuilder() {
  const [selected, setSelected] = useState(0)
  const element = elements[selected]!

  return (
    <div className="prompt-builder">
      <div className="element-selector grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5" role="group" aria-label="Explora los cinco elementos de un buen prompt">
        {elements.map((item, index) => (
          <button key={item.name} type="button" className="element-button" style={{ '--element-color': item.color } as CSSProperties} aria-pressed={selected === index} aria-controls="element-explanation" onClick={() => setSelected(index)}>
            <span className="element-number" aria-hidden="true">0{index + 1}</span>{item.name}
          </button>
        ))}
      </div>
      <div id="element-explanation" className="element-explanation" style={{ '--element-color': element.color } as CSSProperties} aria-live="polite" aria-atomic="true">
        <div key={selected} className="reveal">
          <h3>{element.name}</h3>
          <p className="element-question">{element.question}</p>
          <p>{element.explanation} <span className="element-example">{element.example}</span></p>
        </div>
      </div>
      <h3 className="planning-subtitle">La misma idea, mejor explicada</h3>
      <p className="builder-hint">Elige un elemento arriba y encuentra su parte resaltada en el ejemplo.</p>
      <div className="grid gap-5 lg:grid-cols-[.7fr_1.3fr] prompt-comparison">
        <PromptCard title="Poco claro" text={promptExamples.unclear} hint="Falta explicar el tema, quién lo necesita y cómo debe responder la IA." tone="unclear" />
        <PromptCard title="Bien construido" text={promptExamples.clear} hint="Incluye objetivo, contexto, instrucciones, límites y formato." tone="clear" content={
          annotatedPrompt.map((part, index) => <mark key={index} className={`prompt-fragment ${part.element === selected ? 'fragment-selected' : ''}`} style={{ '--element-color': elements[part.element]!.color } as CSSProperties}>{part.text}</mark>)
        } />
      </div>
    </div>
  )
}
