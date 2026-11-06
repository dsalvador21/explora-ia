import { useState } from 'react'

export function WebLanguagesDemo() {
  const [html, setHtml] = useState(true)
  const [css, setCss] = useState(false)
  const [js, setJs] = useState(false)
  const [clicks, setClicks] = useState(0)

  return (
    <div className="implementation-demo">
      <h3>Enciende cada lenguaje y prueba el botón</h3>
      <p>HTML crea el botón, CSS le da estilo y JavaScript agrega una acción.</p>
      <div className="implementation-toggles">
        <label><input type="checkbox" checked={html} onChange={event => setHtml(event.target.checked)} /> HTML <span>Muestra el botón</span></label>
        <label><input type="checkbox" checked={css} onChange={event => setCss(event.target.checked)} /> CSS <span>Cambia su apariencia</span></label>
        <label><input type="checkbox" checked={js} onChange={event => { setJs(event.target.checked); setClicks(0) }} /> JavaScript <span>Agrega una acción</span></label>
      </div>
      <div className="web-demo-stage">
        {html ? <button type="button" className={css ? 'demo-styled' : 'demo-plain'} onClick={js ? () => setClicks(value => value + 1) : undefined}>¡Hola, mundo!</button> : <p>Sin HTML, no hay un botón al que dar estilo o agregar una acción.</p>}
        <p role="status" aria-live="polite">{html && js && clicks > 0 ? `¡Hiciste clic! JavaScript respondió a tu acción. Clics: ${clicks}.` : html ? js ? 'JavaScript está activo. Presiona el botón.' : 'El botón existe, pero sin JavaScript no muestra un mensaje al presionarlo.' : ''}</p>
      </div>
      <details className="implementation-disclosure"><summary>Ver un pequeño ejemplo de código</summary><pre className="implementation-code"><code>{'<button id="saludo">¡Hola, mundo!</button>\n\n/* CSS: apariencia */\nbutton { background: #ddd6fe; border-radius: 12px; }\n\n// JavaScript: acción\ndocument.querySelector("#saludo").onclick = () => {\n  alert("¡Hola!");\n};'}</code></pre></details>
    </div>
  )
}
