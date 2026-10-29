const tools = {
  gemini: { label: 'Abrir Google Gemini', href: 'https://gemini.google.com/' },
  stitch: { label: 'Abrir Google Stitch', href: 'https://stitch.withgoogle.com/' },
  drive: { label: 'Abrir Google Drive', href: 'https://drive.google.com/' },
}

function ToolIcon({ tool }: { tool: keyof typeof tools }) {
  // Ícono publicado por Stitch: https://www.gstatic.com/labs-code/stitch/favicon-48x48.png
  if (tool === 'stitch') return <img src="/stitch-logo.png" width="22" height="22" alt="" />

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {tool === 'gemini' && <path d="M12 1C13.5 7.5 16.5 10.5 23 12C16.5 13.5 13.5 16.5 12 23C10.5 16.5 7.5 13.5 1 12C7.5 10.5 10.5 7.5 12 1Z" fill="#4285f4" />}
      {tool === 'drive' && <><path d="m8 2 5 8-7 12-5-8Z" fill="#0f9d58" /><path d="M8 2h9l7 12h-9Z" fill="#f4b400" /><path d="M6 22h13l5-8H11Z" fill="#4285f4" /></>}
    </svg>
  )
}

export function ToolLink({ tool }: { tool: keyof typeof tools }) {
  const { label, href } = tools[tool]
  return (
    <a className={`brutal-button design-tool-button tool-${tool}`} href={href} target="_blank" rel="noopener noreferrer">
      <span className="tool-icon"><ToolIcon tool={tool} /></span>
      <span>{label}</span>
      <span className="tool-external" aria-hidden="true">↗</span>
    </a>
  )
}
