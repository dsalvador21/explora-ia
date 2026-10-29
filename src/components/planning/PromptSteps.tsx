import { conversationPhrases, finalPrompt, initialPrompt } from '../../data/planning'
import { PromptCard } from '../PromptCard'
import { StepTabs, type Step } from '../StepTabs'

const steps = ['Comenzar', 'Conversar', 'Finalizar'] as const
export type PromptStep = typeof steps[number]

export function PromptStepContent({ step }: { step: PromptStep }) {
  if (step === 'Comenzar') {
    return <><h3>Prompt inicial para planificar el sitio web</h3><PromptCard title="Comienza la conversación" hint="Reemplacen [TEMA] por el tema de su sitio antes de enviarlo a la IA." text={initialPrompt} /></>
  }
  if (step === 'Conversar') {
    return <><h3>Frases útiles para continuar la conversación</h3><div className="grid gap-4 md:grid-cols-2">{conversationPhrases.map((phrase, index) => <PromptCard key={phrase} title={`Frase ${index + 1}`} text={phrase} />)}</div></>
  }
  return <><h3>Prompt final para generar la propuesta del proyecto</h3><PromptCard title="Organiza lo que decidieron" hint="Péguenlo en la misma conversación para que la IA tenga en cuenta sus respuestas." text={finalPrompt} /></>
}

export function PromptSteps({ extraSteps = [] }: { extraSteps?: Step[] }) {
  return <StepTabs label="Pasos para conversar con la IA" steps={[
    ...steps.map(step => ({ label: step, content: <PromptStepContent step={step} /> })),
    ...extraSteps,
  ]} />
}
