export const continuingPrompts = [
  {
    title: 'Pedir cambios',
    description: 'Modifica colores, textos, botones o cualquier elemento de tu página.',
    prompt: 'Cambia [describe lo que quieres modificar] en mi página web. Mantén el resto del proyecto funcionando igual y explícame qué archivos debo actualizar.',
  },
  {
    title: 'Entender el código',
    description: 'Descubre qué hace una parte del código que generó la IA.',
    prompt: 'Explícame de forma sencilla qué hace este código, para qué sirve y cómo funciona dentro de mi página web. Utiliza ejemplos fáciles de entender.',
  },
  {
    title: 'Saber dónde pegar el código',
    description: 'Aprende a colocar correctamente el código generado.',
    prompt: 'Indícame exactamente en qué archivo y en qué parte debo pegar este código. Explícame si debo reemplazar algo o simplemente agregarlo.',
  },
  {
    title: 'Avanzar paso a paso',
    description: 'Trabaja con calma cuando las instrucciones sean demasiado difíciles.',
    prompt: 'Guíame paso a paso para realizar este cambio. Dame una sola instrucción a la vez, explícame cómo hacerla y espera a que te confirme antes de continuar.',
  },
]

export const contextSteps = [
  { title: 'Pide un resumen', description: 'Solicita a tu IA actual toda la información importante del proyecto.' },
  { title: 'Abre otro chat', description: 'Puedes utilizar una nueva conversación o cambiar a otra herramienta de IA.' },
  { title: 'Entrega el contexto y los archivos', description: 'Pega el resumen y adjunta los archivos actualizados de tu página web.' },
  { title: '¡Sigue construyendo!', description: 'Comprueba que la nueva IA entendió el proyecto y continúa trabajando normalmente.' },
]

export const contextPrompt = 'Haz un resumen completo de nuestro proyecto para continuar trabajando en otra conversación o herramienta de IA. Incluye qué estamos construyendo, los requerimientos, los archivos del proyecto, qué funcionalidades están implementadas, qué falta desarrollar, los problemas pendientes y los próximos pasos. Organiza la información para que otra IA pueda entenderla fácilmente.'

export const testingPrompts = [
  {
    title: 'Revisar los requerimientos',
    description: 'Comprueba si tu página cumple con las funcionalidades que definiste al comenzar el proyecto.',
    prompt: 'Revisa el código de mi página web y compáralo con los requerimientos que definimos. Indícame cuáles parecen estar implementados, cuáles faltan y qué debo comprobar en el navegador para verificar que funcionan. Ayúdame a completar los que estén pendientes.',
  },
  {
    title: 'Buscar errores',
    description: 'Descubre problemas y aprende a corregirlos paso a paso.',
    prompt: 'Analiza el código de mi página web para encontrar posibles errores. Explícame qué podría estar fallando, cómo puedo comprobarlo y cómo corregirlo paso a paso. Si necesitas más información, pregúntame antes de hacer cambios.',
  },
  {
    title: 'Pedir recomendaciones',
    description: 'Descubre cómo mejorar la apariencia, facilidad de uso y funcionamiento de tu página.',
    prompt: 'Analiza mi página web y recomiéndame tres mejoras para que sea más atractiva, fácil de utilizar y funcional. Explícame por qué sería útil cada mejora y cómo puedo implementarla paso a paso.',
  },
]

export const developmentCycle = [
  { emoji: '💡', title: 'Requerimientos', question: '¿Qué queremos construir?', prompt: 'Ayúdame a definir qué debe hacer mi aplicación.' },
  { emoji: '🎨', title: 'Diseño', question: '¿Cómo queremos que se vea?', prompt: 'Propón un diseño sencillo y atractivo para mi aplicación.' },
  { emoji: '💻', title: 'Implementación', question: '¡Construyamos nuestra idea!', prompt: 'Ayúdame a crear el código de mi aplicación paso a paso.' },
  { emoji: '🧪', title: 'Testing y mejoras', question: '¿Funciona correctamente?', prompt: 'Ayúdame a comprobar los requerimientos y corregir los errores.' },
]

export const takeaways = [
  { title: 'Aprende a escribir buenos prompts', text: 'Explica qué quieres lograr, entrega contexto y escribe instrucciones claras y específicas.' },
  { title: 'Avanza paso a paso y con paciencia', text: 'Sigue las instrucciones con calma, comprueba cada avance y no intentes hacer todo al mismo tiempo.' },
  { title: '¡Pregunta sin miedo!', text: 'Cuando la IA conoce tu proyecto, puedes conversar con ella como con un compañero que te ayuda a aprender.' },
]
