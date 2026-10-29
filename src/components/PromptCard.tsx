import { useEffect, useId, useRef, useState, type ReactNode } from 'react'

type CopyStatus = 'idle' | 'copying' | 'copied' | 'error'

export function PromptCard({ title, text, hint, tone = '', content }: {
  title: string
  text: string
  hint?: string
  content?: ReactNode
  tone?: 'unclear' | 'clear' | ''
}) {
  const [status, setStatus] = useState<CopyStatus>('idle')
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const titleId = useId()
  const feedbackId = useId()

  useEffect(() => () => clearTimeout(timer.current), [])

  async function copyPrompt() {
    clearTimeout(timer.current)
    setStatus('copying')
    try {
      await navigator.clipboard.writeText(text)
      setStatus('copied')
      timer.current = setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={`prompt-card ${tone ? `prompt-${tone}` : ''}`}>
      <div className="prompt-card-heading">
        <h4 id={titleId}>{title}</h4>
        <button className="copy-button" type="button" onClick={copyPrompt} disabled={status === 'copying'} aria-describedby={`${titleId} ${feedbackId}`}>
          {status === 'copied' ? '¡Copiado!' : status === 'copying' ? 'Copiando…' : 'Copiar'}
        </button>
      </div>
      {hint && <p className="prompt-hint">{hint}</p>}
      <p className="prompt-text">{content ?? text}</p>
      <p id={feedbackId} className={`copy-feedback ${status === 'error' ? 'copy-error' : ''}`} role="status" aria-live="polite" aria-atomic="true">
        {status === 'copied' ? 'Texto copiado. ¡Listo para pegar en la IA!' : status === 'error' ? 'No se pudo copiar. Selecciona el texto y cópialo manualmente.' : ''}
      </p>
    </div>
  )
}
