import { useEffect, useId, useRef, useState } from 'react'

export function CopyEmailButton({ email, groupNumber }: { email: string; groupNumber: number }) {
  const [status, setStatus] = useState<'idle' | 'copying' | 'copied' | 'error'>('idle')
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const feedbackId = useId()

  useEffect(() => () => clearTimeout(timer.current), [])

  async function copyEmail() {
    clearTimeout(timer.current)
    setStatus('copying')
    try {
      await navigator.clipboard.writeText(email)
      setStatus('copied')
      timer.current = setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="group-copy">
      <button className="copy-button group-copy-button" type="button" onClick={copyEmail} disabled={status === 'copying'} aria-label={`Copiar correo del grupo ${groupNumber}`} aria-describedby={feedbackId}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3" /></svg>
        {status === 'copied' ? '¡Copiado!' : status === 'copying' ? 'Copiando…' : 'Copiar correo'}
      </button>
      <p id={feedbackId} className={`group-copy-feedback ${status === 'error' ? 'group-copy-error' : ''}`} role="status" aria-live="polite" aria-atomic="true">
        {status === 'copied' ? 'Correo copiado. ¡Listo para pegar!' : status === 'error' ? 'No se pudo copiar. Selecciona el correo y cópialo manualmente.' : ''}
      </p>
    </div>
  )
}
