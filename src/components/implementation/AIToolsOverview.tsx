// Logos publicados por los sitios oficiales de Claude, ChatGPT y Gemini.
const assistants = [
  { name: 'Claude', href: 'https://claude.ai/', logo: '/claude-logo.svg', description: 'Para generar y corregir código.' },
  { name: 'ChatGPT', href: 'https://chatgpt.com/', logo: '/chatgpt-logo.png', description: 'Para crear código y entender cómo funciona.' },
  { name: 'Gemini', href: 'https://gemini.google.com/', logo: '/gemini-logo.png', description: 'Para transformar tus ideas en una página web.' },
] as const

export function AIToolsOverview() {
  return <>
    <div className="grid gap-5 lg:grid-cols-3 implementation-assistants">{assistants.map(assistant => <div key={assistant.name} className="implementation-assistant"><div className="flex items-center gap-3"><span className="assistant-logo"><img src={assistant.logo} width="36" height="36" alt="" /></span><h3>{assistant.name}</h3></div><p>{assistant.description}</p><a className="lesson-link" href={assistant.href} target="_blank" rel="noopener noreferrer">Abrir {assistant.name} ↗</a></div>)}</div>
    <p className="implementation-small">Elijan una para trabajar. Las tres pueden ayudarles; sus funciones y límites pueden variar.</p>
  </>
}
