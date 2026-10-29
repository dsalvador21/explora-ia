// Fuente: Clase 2.pptx.pdf, diapositivas 6, 11, 12 y 13.
// Se conservan las palabras y la puntuación; solo se quitan las comillas de cita
// y los saltos de línea que responden al ancho de las diapositivas.
export const promptExamples = {
  unclear: 'Dame ideas para una página web',
  clear: 'Somos estudiantes de 7.º básico y queremos crear una página web sobre videojuegos. Danos cinco ideas sencillas con HTML y CSS. Explica cada una brevemente en una lista',
}

export const initialPrompt = `Somos un grupo de estudiantes de 7.º básico y queremos crear un sitio web sobre [TEMA].

Actúa como nuestro guía para planificar el proyecto. Haznos preguntas de una en una para ayudarnos a definir su objetivo, requerimientos, contenido y secciones.

Nuestro sitio web será desarrollado con HTML, CSS, JavaScript y, si necesitamos guardar información, Express y SQLite.

Utiliza un lenguaje sencillo, espera nuestras respuestas antes de continuar y ayúdanos a mantener el proyecto alcanzable. No tomes las decisiones por nosotros.`

export const conversationPhrases = [
  'Explícanos esa idea con un ejemplo',
  'Danos tres opciones diferentes',
  '¿Qué otras características podríamos agregar?',
  '¿Cómo podríamos simplificar nuestro proyecto?',
  'No nos gusta esa propuesta, queremos cambiarla',
  '¿Necesitamos una base de datos para esta funcionalidad?',
  '¿Es esta idea demasiado compleja para nosotros?',
]

export const finalPrompt = `A partir de nuestra conversación, prepara una propuesta breve y ordenada para nuestro sitio web.

Incluye: 
1. Nombre provisional del sitio web. 
2. Temática. 
3. Objetivo principal. 
4. Público al que está dirigido. 
5. Secciones o páginas que tendrá. 
6. Requerimientos claros, explicando qué debe tener o hacer nuestro sitio web.

Utiliza un lenguaje sencillo y no agregues características que no hayamos decidido. Si falta información, pregúntanos antes de terminar.`
