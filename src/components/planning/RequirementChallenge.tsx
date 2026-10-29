import { useState } from 'react'

const requirements = [
  'Controlar un automóvil',
  'Tener una pista de carreras',
  'Mostrar el tiempo de carrera',
  'Detectar la llegada a la meta',
  'Iniciar una nueva partida',
]

const options = ['Un juego de carreras', 'Mostrar el tiempo de carrera', 'Un juego entretenido']

export function RequirementChallenge() {
  const [answer, setAnswer] = useState<number | null>(null)
  const correct = answer === 1

  return (
    <div className="requirement-challenge">
      <div className="challenge-heading"><span className="challenge-sticker">¡Prueba tu ojo!</span><h3>¿Cuál de estas frases es un requerimiento?</h3></div>
      <div className="challenge-options grid gap-3 sm:grid-cols-3" role="group" aria-label="Elige un requerimiento">
        {options.map((option, index) => (
          <button key={option} className="challenge-option" type="button" aria-pressed={answer === index} onClick={() => setAnswer(index)}>
            <span aria-hidden="true">{String.fromCharCode(65 + index)}</span>{option}
          </button>
        ))}
      </div>
      <p className={`challenge-feedback ${correct ? 'answer-correct' : ''}`} role="status" aria-live="polite">
        {answer === null ? 'Elige una opción para descubrir los ejemplos.' : correct ? '¡Exacto! Indica algo concreto que el juego debe hacer.' : 'Esa frase describe una idea general. Busca algo concreto que el juego deba hacer. ¡Prueba otra vez!'}
      </p>
      {correct && (
        <div className="requirement-example reveal">
          <h3>Piensa en un videojuego de carreras</h3>
          <p>Sus requerimientos dicen qué podrá hacer el jugador y cómo funcionará el juego:</p>
          <ul className="requirements-list">{requirements.map((requirement, index) => <li key={requirement}><span aria-hidden="true">0{index + 1}</span>{requirement}</li>)}</ul>
          <p className="requirement-takeaway">Una idea dice «un juego de carreras». Un requerimiento precisa «mostrar el tiempo de carrera».</p>
        </div>
      )}
    </div>
  )
}
