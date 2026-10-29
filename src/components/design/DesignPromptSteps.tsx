import { designSteps, reviewRequirementsPrompt } from '../../data/design'
import { PromptCard } from '../PromptCard'
import { StepTabs } from '../StepTabs'
import { PromptSteps } from '../planning/PromptSteps'

export function RequirementsReview() {
  return <><h3>Revisar requerimientos</h3><p className="design-step-description">Comprueben que su proyecto tenga al menos cinco requerimientos claros antes de comenzar a diseñar.</p><PromptCard title="Revisen su propuesta con la IA" text={reviewRequirementsPrompt} hint="Utilícenlo en la misma conversación donde definieron su propuesta." /></>
}

export function ReviewPromptSteps() {
  return <PromptSteps extraSteps={[{ label: 'Revisar requerimientos', content: <RequirementsReview /> }]} />
}

export function DesignPromptContent({ step }: { step: typeof designSteps[number] }) {
  return <><h3>{step.title}</h3><p className="design-step-description">{step.description}</p><PromptCard title={step.title} text={step.prompt} /></>
}

export function DesignPromptSteps() {
  return <StepTabs label="Pasos para diseñar en Gemini" steps={designSteps.map(step => ({ label: step.label, content: <DesignPromptContent step={step} /> }))} />
}
