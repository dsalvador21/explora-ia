const categories = [
  { title: 'Colores y estilos', description: 'Apariencia y combinaciones de colores.', kind: 'palette' },
  { title: 'Logotipos', description: 'Imagen que representa nuestro proyecto.', kind: 'logo' },
  { title: 'Imágenes', description: 'Ilustraciones que acompañan el contenido.', kind: 'image' },
  { title: 'Interfaces y prototipos', description: 'Organización de páginas, botones y secciones.', kind: 'interface' },
]

function Example({ kind }: { kind: string }) {
  if (kind === 'palette') {
    return <div className="palette-example" aria-label="Ejemplo de paleta: violeta, celeste y amarillo">{['#8B5CF6', '#38BDF8', '#FBBF24'].map(color => <div key={color}><span style={{ background: color }} /><small>{color}</small></div>)}</div>
  }
  if (kind === 'logo') {
    return <div className="logo-example" aria-label="Ejemplo de logotipo: un planeta con el nombre Órbita"><svg viewBox="0 0 100 70" width="100" height="70" fill="none" aria-hidden="true"><circle cx="50" cy="35" r="22" fill="#ddd6fe" stroke="#18181b" strokeWidth="3" /><ellipse cx="50" cy="35" rx="43" ry="12" transform="rotate(-25 50 35)" stroke="#18181b" strokeWidth="3" /><circle cx="76" cy="15" r="6" fill="#fbbf24" stroke="#18181b" strokeWidth="2" /></svg><strong>Órbita</strong></div>
  }
  if (kind === 'image') {
    return <svg className="landscape-example" viewBox="0 0 240 125" role="img" aria-label="Ejemplo de ilustración: montañas, un sol y un río"><rect x="1" y="1" width="238" height="123" rx="12" fill="#e0f2fe" stroke="#18181b" strokeWidth="2" /><circle cx="180" cy="30" r="16" fill="#fbbf24" stroke="#18181b" strokeWidth="2" /><path d="m2 100 65-73 57 61 35-38 79 62v11H2Z" fill="#ddd6fe" stroke="#18181b" strokeWidth="2" /><path d="m47 49 20-22 21 23-20-5Z" fill="#fff" stroke="#18181b" strokeWidth="2" /><path d="M120 89c-30 6-30 20 10 34h40c-50-15-45-22-30-28" fill="#38bdf8" stroke="#18181b" strokeWidth="2" /></svg>
  }
  return <div className="interface-example" aria-label="Ejemplo de prototipo: menú, título, imagen y botón"><div className="mini-nav"><strong>Órbita</strong><span>Inicio · Planetas</span></div><div className="mini-content"><div><strong>Un universo por descubrir</strong><span className="mini-button">Explorar</span></div><span className="mini-planet" aria-hidden="true">✦</span></div></div>
}

export function DesignExamples() {
  return <div className="design-examples grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{categories.map(category => <div key={category.kind} className="design-example-card"><div className="design-example-art"><Example kind={category.kind} /></div><h3>{category.title}</h3><p>{category.description}</p></div>)}</div>
}
