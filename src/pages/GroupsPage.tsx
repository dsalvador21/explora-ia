import { GroupCard } from '../components/GroupCard'
import { groups } from '../data/groups'

export function GroupsPage() {
  return (
    <section className="groups-page" aria-labelledby="groups-title">
      <header className="page-intro reveal">
        <span className="eyebrow-pill">// CREAMOS EN EQUIPO</span>
        <h1 id="groups-title">Grandes ideas, <span className="highlight highlight-purple">grandes equipos.</span></h1>
        <p>Encuentra tu grupo, sus integrantes y el correo para trabajar juntos en su proyecto.</p>
      </header>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">{groups.map(group => <GroupCard key={group.number} group={group} />)}</div>
    </section>
  )
}
