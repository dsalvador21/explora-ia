import { Icon } from './components/Icon'
import { visibleLessons } from './data/lessons'
import { HomePage } from './pages/HomePage'
import { ClassesPage } from './pages/ClassesPage'
import { GroupsPage } from './pages/GroupsPage'
import { LessonPage } from './pages/LessonPage'
import { NotFoundPage } from './pages/NotFoundPage'

function Brand() {
  return <span className="flex items-center gap-3"><span className="brand-icon"><Icon name="robot" /></span><span className="brand-word">Explora<span>IA</span></span></span>
}

function Navbar({ pathname }: { pathname: string }) {
  return (
    <header className="site-header">
      <div className="page-width flex items-center justify-between gap-4">
        <a href="/" aria-label="ExploraIA, inicio"><Brand /></a>
        <nav aria-label="Navegación principal" className="primary-nav">
          <a className="nav-link" href="/" aria-current={pathname === '/' ? 'page' : undefined}>Inicio</a>
          <a className="nav-link" href="/grupos" aria-current={pathname === '/grupos' ? 'page' : undefined}>Grupos</a>
          <a className="nav-link nav-classes" href="/clases" aria-current={pathname === '/clases' ? 'page' : undefined}>Clases <Icon name="arrow" /></a>
        </nav>
      </div>
    </header>
  )
}

// Los enlaces nativos conservan el historial, las anclas y la apertura en otra pestaña.
// Vite sirve index.html también al entrar directamente a una ruta de clase.
export function App({ pathname = window.location.pathname }: { pathname?: string }) {
  const path = pathname.replace(/\/+$/, '') || '/'
  const lesson = visibleLessons.find(item => path === `/clases/${item.slug}`)
  const page = path === '/' ? <HomePage />
    : path === '/clases' ? <ClassesPage />
      : path === '/grupos' ? <GroupsPage />
      : lesson ? <LessonPage lesson={lesson} /> : <NotFoundPage />

  return (
    <div id="inicio">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar pathname={path} />
      <main id="contenido" className="page-width">{page}</main>
      <footer className="site-footer">
        <div className="page-width flex flex-col items-center justify-between gap-5 sm:flex-row">
          <a href="/" aria-label="ExploraIA, volver al inicio"><Brand /></a>
          <p>Un espacio para aprender con curiosidad.<span>Hecho para estudiantes de 7° básico.</span></p>
          <a className="back-top" href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
