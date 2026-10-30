import type { CSSProperties } from 'react'
import type { Group } from '../data/groups'
import { CopyEmailButton } from './CopyEmailButton'

const accents = ['#ddd6fe', '#bae6fd', '#fde68a', '#bbf7d0', '#fecdd3', '#99f6e4']

export function GroupCard({ group }: { group: Group }) {
  return (
    <article className="group-card reveal" style={{ '--group-accent': accents[group.number - 1], '--delay': `${(group.number - 1) * 70}ms` } as CSSProperties} aria-labelledby={`group-${group.number}-title`}>
      <div className="group-card-heading">
        <span className="group-number" aria-hidden="true">{String(group.number).padStart(2, '0')}</span>
        <h2 id={`group-${group.number}-title`}>Grupo {group.number}</h2>
      </div>
      <h3 className="group-label">Integrantes</h3>
      <ul className="group-members">{group.members.map(member => <li key={member}><span className="member-dot" aria-hidden="true" />{member}</li>)}</ul>
      <div className="group-email-area">
        <h3 className="group-label">Correo del grupo</h3>
        <p className="group-email">{group.email}</p>
        <CopyEmailButton email={group.email} groupNumber={group.number} />
      </div>
    </article>
  )
}
