import type { Lesson } from '../data/lessons'
import { continuingPrompts, contextSteps, contextPrompt, testingPrompts, developmentCycle, takeaways } from '../data/testing'
import { LessonHeader } from '../components/LessonHeader'
import { PromptCard } from '../components/PromptCard'
import { Icon } from '../components/Icon'
import { ToolLink } from '../components/design/ToolLink'

const stops = [
  ['testing-build', 'Seguir creando'], ['testing-context', 'Cambiar de IA'], ['testing-workshop', 'Probar'],
  ['testing-celebrate', 'Celebrar'], ['testing-save', 'Recuperar tu proyecto'],
]

export function TestingLessonPage({ lesson }: { lesson: Lesson }) {
  return (
    <article className={`lesson-page planning-lesson implementation-lesson testing-lesson theme-${lesson.theme}`} aria-labelledby="lesson-title">
      <LessonHeader lesson={lesson} />
      <nav className="implementation-route" aria-label="Recorrido de la Clase 5">
        {stops.map(([id, label], index) => <a key={id} href={`#${id}`}><span aria-hidden="true">0{index + 1}</span>{label}</a>)}
      </nav>

      <div className="planning-sections">
        <section id="testing-build" className="lesson-panel reveal" aria-labelledby="testing-build-title">
          <span className="section-kicker">// 01 · DE VUELTA A TU PROYECTO</span>
          <h2 id="testing-build-title">¡Sigamos construyendo!</h2>
          <p>En la clase anterior comenzamos a transformar nuestras ideas en páginas web utilizando HTML, CSS, JavaScript y herramientas de inteligencia artificial.</p>
          <p>¡Ahora podemos seguir agregando funciones, haciendo cambios y mejorando nuestros proyectos!</p>
          <dl className="testing-language-recap">
            <div><dt>HTML</dt><dd>Estructura y contenido de nuestra página.</dd></div>
            <div><dt>CSS</dt><dd>Colores, estilos y apariencia.</dd></div>
            <div><dt>JavaScript</dt><dd>Interactividad y funcionamiento.</dd></div>
          </dl>
          <h3 className="planning-subtitle">Prompts para continuar programando</h3>
          <div className="grid gap-5 md:grid-cols-2">
            {continuingPrompts.map(item => <PromptCard key={item.title} title={item.title} hint={item.description} text={item.prompt} />)}
          </div>
          <p className="implementation-note"><strong>No necesitas memorizar todo el código.</strong> ¡Puedes pedirle a la IA que te explique cualquier cosa que no entiendas!</p>
        </section>

        <section id="testing-context" className="lesson-panel testing-context reveal" aria-labelledby="testing-context-title">
          <span className="section-kicker">// 02 · LLEVA CONTIGO TU CONTEXTO</span>
          <h2 id="testing-context-title">¿Se acabaron los mensajes? ¡Continúa en otra IA!</h2>
          <p>Las herramientas de IA tienen límites de uso. Si se terminan tus mensajes gratuitos o necesitas comenzar otra conversación, ¡puedes continuar sin empezar desde cero!</p>
          <ol className="testing-context-steps">
            {contextSteps.map((step, index) => <li key={step.title}><span className="activity-number" aria-hidden="true">{index + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}
          </ol>
          <h3 className="sr-only">Un prompt para llevar tu proyecto a otro chat</h3>
          <PromptCard title="Preparar el contexto" text={contextPrompt} />
          <div className="testing-tool-links" aria-label="Herramientas de inteligencia artificial">
            <ToolLink tool="claude" /><ToolLink tool="chatgpt" /><ToolLink tool="gemini" />
          </div>
          <p className="testing-file-reminder"><strong>El resumen recupera el contexto, pero no reemplaza los archivos.</strong> ¡Recuerda adjuntar tu HTML, CSS y JavaScript actualizados!</p>
        </section>

        <section id="testing-workshop" className="lesson-panel testing-main-panel reveal" aria-labelledby="testing-workshop-title">
          <span className="section-kicker">// 03 · LA PRUEBA ESTÁ EN EL NAVEGADOR</span>
          <h2 id="testing-workshop-title">¡Hora de probar nuestra página! (Testing)</h2>
          <p>¡Nuestra página ya está tomando forma! Ahora necesitamos comprobar que funciona correctamente y que hace lo que habíamos planificado.</p>
          <p>A este proceso lo llamamos <strong>testing o pruebas de software</strong>.</p>
          <h3 className="planning-subtitle">Tres formas de revisar y mejorar</h3>
          <div className="grid gap-5 lg:grid-cols-3 testing-prompt-grid">
            {testingPrompts.map(item => <PromptCard key={item.title} title={item.title} hint={item.description} text={item.prompt} />)}
          </div>
          <aside className="testing-reality" aria-labelledby="testing-reality-title">
            <div className="testing-reality-heading"><span aria-hidden="true">🧪</span><h3 id="testing-reality-title">¡La IA también se equivoca!</h3></div>
            <p>La inteligencia artificial puede generar código incorrecto, malinterpretar tus instrucciones o decir que algo funciona sin haberlo probado.</p>
            <div className="testing-example"><p>La IA dice que un botón funciona, pero cuando lo presionas no pasa nada. ¿Qué deberías hacer?</p><p><strong>¡Comprobarlo tú mismo y pedir ayuda para encontrar el problema!</strong></p></div>
            <p className="testing-reality-motto"><strong>No basta con que la IA diga que funciona. ¡Abre tu página y compruébalo!</strong></p>
          </aside>
        </section>

        <section id="testing-celebrate" className="lesson-panel testing-celebration reveal" aria-labelledby="testing-celebrate-title">
          <span className="section-kicker">// 04 · MIRA TODO LO QUE APRENDISTE</span>
          <h2 id="testing-celebrate-title">¡Ya sabes crear software con IA!</h2>

          <div className="testing-cycle-block">
            <h3>¡De una idea a una aplicación real!</h3>
            <p>Durante este taller aprendimos un proceso que podemos repetir para crear nuestros propios proyectos.</p>
            <ol className="testing-cycle">
              {developmentCycle.map((step, index) => <li key={step.title}><span className="testing-cycle-emoji" aria-hidden="true">{step.emoji}</span><h4><span>{index + 1}.</span> {step.title}</h4><p>{step.question}</p><blockquote>“{step.prompt}”</blockquote></li>)}
            </ol>
            <p className="testing-cycle-return"><span aria-hidden="true">↻</span> Vuelve a tus ideas, prueba y mejora. ¡El ciclo continúa!</p>
          </div>

          <div className="testing-takeaways">
            <h3>¡Estas son las habilidades que queremos que recuerdes!</h3>
            <ol>
              {takeaways.map((item, index) => <li key={item.title}><span className="testing-takeaway-number" aria-hidden="true">0{index + 1}</span><div><h4>{item.title}</h4><p>{item.text}</p></div></li>)}
            </ol>
          </div>

          <aside className="testing-bonus" aria-labelledby="testing-bonus-title">
            <span className="testing-bonus-star" aria-hidden="true">★</span>
            <div>
              <h3 id="testing-bonus-title">BONUS: ¡Existen IA que modifican tu código directamente!</h3>
              <p>Algunas herramientas de inteligencia artificial pueden conectarse a editores como Visual Studio Code, leer los archivos de tu proyecto y ayudarte a modificarlos sin tener que copiar y pegar todo manualmente.</p>
              <ul className="testing-agent-names" aria-label="Ejemplos de agentes de IA"><li>GitHub Copilot</li><li>Claude Code</li><li>Codex</li></ul>
              <a className="lesson-link" href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">Conoce GitHub Copilot <span aria-hidden="true">↗</span></a>
              <p className="implementation-small">Estas herramientas pueden tener límites gratuitos o requerir una suscripción.</p>
            </div>
          </aside>

          <div className="testing-launch">
            <span className="testing-launch-spark" aria-hidden="true">✦</span>
            <span className="testing-launch-rocket" aria-hidden="true">🚀</span>
            <h3>¡Ahora puedes crear lo que imagines!</h3>
            <ul className="testing-project-ideas">
              <li><span aria-hidden="true">🎮</span>Videojuegos</li><li><span aria-hidden="true">📱</span>Aplicaciones para teléfonos</li>
              <li><span aria-hidden="true">🌐</span>Páginas web</li><li><span aria-hidden="true">🤖</span>Programas para robots</li>
            </ul>
            <p className="testing-launch-motto"><strong>¡Lo que hoy es una idea, mañana puede ser tu próxima creación!</strong></p>
            <p>No necesitas saberlo todo para comenzar. Con curiosidad, paciencia y buenas preguntas puedes seguir aprendiendo y construyendo proyectos cada vez más increíbles.</p>
          </div>
        </section>

        <section id="testing-save" className="lesson-panel testing-save reveal" aria-labelledby="testing-save-title">
          <span className="section-kicker">// 05 · TU PROYECTO ES TUYO</span>
          <h2 id="testing-save-title">¡No pierdas tu proyecto!</h2>
          <p>Durante el taller guardamos nuestros proyectos en Google Drive.</p>
          <p>Puedes recuperar tus archivos, abrirlos en Visual Studio Code y seguir mejorando tu página web cuando quieras.</p>
          <ToolLink tool="drive" />
          <p className="implementation-small">El enlace abre Google Drive. Busca allí la carpeta en la que guardaste tu proyecto.</p>
          <div className="testing-farewell">
            <h3>¡Felicitaciones por llegar hasta aquí! <span aria-hidden="true">🎉</span></h3>
            <p>Comenzaste con una idea, aprendiste a darle instrucciones a una IA, diseñaste tu página y escribiste tu primer código.</p>
            <p><strong>¡Este es solo el comienzo de todo lo que puedes crear!</strong></p>
          </div>
        </section>
      </div>
      <a className="text-link testing-previous" href="/clases/implementacion-i">← Volver a la Clase 4: Implementación I <Icon name="code" /></a>
    </article>
  )
}
