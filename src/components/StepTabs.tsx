import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'

export type Step = { label: string; content: ReactNode }

export function StepTabs({ steps, label }: { steps: Step[]; label: string }) {
  const [selected, setSelected] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const id = useId()

  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number
    switch (event.key) {
      case 'ArrowRight': next = (index + 1) % steps.length; break
      case 'ArrowLeft': next = (index + steps.length - 1) % steps.length; break
      case 'Home': next = 0; break
      case 'End': next = steps.length - 1; break
      default: return
    }
    event.preventDefault()
    setSelected(next)
    tabs.current[next]?.focus()
  }

  return (
    <div className="prompt-steps">
      <div className={`step-tabs grid gap-3 ${steps.length === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-3'}`} role="tablist" aria-label={label}>
        {steps.map((step, index) => (
          <button key={step.label} ref={node => { tabs.current[index] = node }} id={`${id}-tab-${index}`} type="button" role="tab" aria-selected={selected === index} aria-controls={`${id}-panel`} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => handleKey(event, index)}>
            <span className="step-number" aria-hidden="true">{index + 1}</span>{step.label}
          </button>
        ))}
      </div>
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${selected}`} tabIndex={0}>
        <div key={selected} className="prompt-group reveal"><span className="step-counter">PASO {selected + 1} DE {steps.length}</span>{steps[selected]!.content}</div>
      </div>
    </div>
  )
}
