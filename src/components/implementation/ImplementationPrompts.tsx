import { implementationSteps, helpPrompts } from '../../data/implementation'
import { PromptCard } from '../PromptCard'
import { StepTabs } from '../StepTabs'

function PromptWithPlaceholders({ text }: { text: string }) {
  return <>{text.split(/(\[[^\]]+\])/g).map((part, index) => part.startsWith('[') ? <mark className="implementation-placeholder" key={index}>{part}</mark> : part)}</>
}

export function ImplementationStepContent({ step }: { step: typeof implementationSteps[number] }) {
  return (
    <>
      <h3>{step.title}</h3>
      <p><strong>Objetivo:</strong> {step.objective}</p>
      <p className="implementation-instructions">{step.instructions}</p>
      <p className="implementation-note">{step.hint}</p>
      <PromptCard title={step.title} text={step.prompt} content={<PromptWithPlaceholders text={step.prompt} />} />
    </>
  )
}

export function ImplementationPrompts() {
  return <>
    <p>Utilicen ChatGPT, Gemini o Claude. Continúen los cuatro pasos en la misma conversación para conservar la información de su proyecto.</p>
    <StepTabs label="Pasos para implementar el sitio web" steps={implementationSteps.map(step => ({ label: step.label, content: <ImplementationStepContent step={step} /> }))} />
    <p className="implementation-finish">¡Felicitaciones! Ya tienes una primera versión de tu sitio web. Ahora puedes seguir probando, corrigiendo y mejorando.</p>
  </>
}

export function HelpPrompts() {
  return <div className="grid gap-4 md:grid-cols-2 implementation-help-prompts">{helpPrompts.map(item => <PromptCard key={item.title} title={item.title} text={item.prompt} content={<PromptWithPlaceholders text={item.prompt} />} />)}</div>
}
