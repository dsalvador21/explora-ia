import type { IconName } from '../components/Icon'

export type Lesson = {
  number: string
  hidden?: boolean
  slug: string
  title: string
  description: string
  icon: IconName
  theme: 'yellow' | 'purple' | 'cyan'
  tags: string[]
  sticker: string
  objective: string
  activities: string[]
  materials: string[]
}

// Contenido breve de ejemplo, listo para reemplazar por el material de cada clase.
export const lessons: Lesson[] = [
  {
    number: '01',
    hidden: true,
    slug: 'introduccion-a-la-inteligencia-artificial',
    title: 'Introducción a la inteligencia artificial',
    description: 'Descubre qué es la IA, dónde la encuentras en tu día a día y qué puedes hacer con ella.',
    icon: 'robot',
    theme: 'yellow',
    tags: ['Descubrir', 'Entender'],
    sticker: 'Todo parte aquí',
    objective: 'Reconocer qué es la inteligencia artificial e identificar ejemplos de su uso cotidiano.',
    activities: [
      'Comparte con tu curso una aplicación o un juego que conozcas y que podría utilizar IA.',
      'Compara una herramienta con IA y una herramienta que sigue instrucciones fijas.',
      'Anota una posibilidad y una limitación de la inteligencia artificial.',
    ],
    materials: ['Cuaderno y lápiz', 'Computador o tablet con acceso a internet'],
  },
  {
    number: '02',
    slug: 'planificacion-y-requerimientos',
    title: 'Planificación y requerimientos',
    description: 'Transforma una idea en un plan: define para quién crearás y qué necesita tu proyecto.',
    icon: 'plan',
    theme: 'purple',
    tags: ['Imaginar', 'Organizar'],
    sticker: '¡Dale forma a tu idea!',
    objective: 'Planificar un sitio web sencillo, definiendo su propósito, sus visitantes y sus necesidades.',
    activities: [
      'Elige un tema para tu sitio y explica a quién te gustaría ayudar con él.',
      'Escribe tres elementos que tu sitio necesita, como una presentación, imágenes o información.',
      'Dibuja un esquema de sus secciones y comparte tu plan con un compañero.',
    ],
    materials: ['Hojas y lápices de colores', 'Notas de la clase anterior'],
  },
  {
    number: '03',
    slug: 'diseno-de-sitios-web-con-ia',
    title: 'Diseño de sitios web con IA',
    description: 'Explora cómo trabajar con la IA para convertir tu plan en el diseño de un sitio web.',
    icon: 'code',
    theme: 'cyan',
    tags: ['Diseñar', 'Crear'],
    sticker: 'De la idea a la web',
    objective: 'Proponer un diseño de sitio web a partir de un plan y explorar cómo la IA puede apoyar el proceso.',
    activities: [
      'Revisa tu plan y elige colores y una tipografía que ayuden a comunicar tu idea.',
      'Observa con tu docente un ejemplo de diseño web creado con apoyo de IA.',
      'Compara el ejemplo con tu boceto y anota dos mejoras para tu diseño.',
    ],
    materials: ['Plan y boceto de la clase 2', 'Computador o tablet con acceso a internet'],
  },
]

export const visibleLessons = lessons.filter(lesson => !lesson.hidden)
