// Textos originales de las instrucciones adjuntas de la Clase 3.
export const reviewRequirementsPrompt = `Somos un grupo de estudiantes de 7.º básico y estamos creando un sitio web.

Ya definimos nuestra propuesta y queremos revisar nuestros requerimientos antes de comenzar el diseño.

Actúa como nuestro guía y revisa los requerimientos que definimos anteriormente en esta conversación.

Comprueba que:

1. Tengamos al menos cinco requerimientos.
2. Cada requerimiento explique claramente qué debe tener o hacer nuestro sitio web.
3. No existan requerimientos repetidos.
4. Sean posibles de desarrollar en un proyecto escolar sencillo.

Si encuentras problemas o faltan requerimientos, haznos preguntas de una en una para ayudarnos a corregirlos.

No agregues características ni tomes decisiones por nosotros.

Al finalizar, presenta una lista numerada con nuestros requerimientos definitivos.`

export const stylePrompt = `Somos estudiantes de 7.º básico y queremos comenzar a diseñar nuestro sitio web.

Utiliza los requerimientos que definimos anteriormente en esta conversación para ayudarnos a elegir los colores y el estilo visual de nuestra página.

Primero, haznos preguntas de una en una para conocer nuestros gustos, cómo queremos que se vea el sitio y qué sensaciones queremos transmitir.

Después de escuchar nuestras respuestas:

1. Propón tres estilos visuales que se adapten a nuestro proyecto.
2. Sugiere una paleta de colores para cada estilo, incluyendo sus códigos HEX.
3. Explica brevemente las ventajas de cada propuesta.

Utiliza un lenguaje sencillo y espera a que elijamos nuestro estilo favorito antes de continuar. No tomes las decisiones por nosotros.`

export const logoPrompt = `Ahora queremos crear un logotipo para nuestro sitio web.

Utiliza la información de nuestro proyecto, los requerimientos y el estilo visual que elegimos anteriormente.

Primero, haznos preguntas de una en una para conocer qué símbolos, formas o elementos nos gustaría incluir en el logotipo.

Después de escuchar nuestras respuestas:

1. Propón tres ideas de logotipo diferentes.
2. Explica brevemente qué representa cada una.
3. Recomienda cómo utilizar los colores que elegimos.

Espera a que seleccionemos nuestra idea favorita y luego ayúdanos a generar una imagen del logotipo.

El diseño debe ser sencillo, reconocible y adecuado para nuestro sitio web. No tomes las decisiones por nosotros.`

export const stitchPrompt = `Ahora queremos crear el prototipo visual de nuestro sitio web utilizando Google Stitch.

Utiliza toda la información que hemos definido anteriormente en esta conversación:

1. La temática y el objetivo de nuestro sitio web.
2. El público al que está dirigido.
3. Nuestros requerimientos.
4. Las páginas y secciones que tendrá.
5. Los colores y el estilo visual que elegimos.
6. El logotipo y las imágenes que queremos utilizar.

Prepara un prompt completo y detallado que podamos copiar directamente en Google Stitch para generar nuestro prototipo visual.

El prompt debe explicar cómo queremos que se vean y organicen las páginas, botones, textos, imágenes y demás elementos del sitio.

No inventes nuevas funcionalidades ni cambies nuestras decisiones.

Entrega únicamente el prompt final, listo para copiar, sin explicaciones adicionales.`

export const designSteps = [
  { label: 'Colores y estilos', title: 'Colores y estilos', description: 'Elijan la apariencia de su sitio: la IA propondrá tres estilos y sus paletas de colores.', prompt: stylePrompt },
  { label: 'Crear logotipo', title: 'Crear nuestro logotipo', description: 'Exploren símbolos y formas para elegir una idea de logotipo que represente su proyecto.', prompt: logoPrompt },
  { label: 'Preparar Stitch', title: 'Preparar el diseño para Stitch', description: 'Pidan a Gemini un prompt que reúna sus decisiones. Después, copien su respuesta en Google Stitch.', prompt: stitchPrompt },
]

export const improvementGroups = [
  { title: 'Colores y estilos', prompts: ['Prueba una combinación de colores más llamativa.', 'Haz que el diseño sea más moderno y menos recargado.'] },
  { title: 'Organización', prompts: ['Organiza mejor las secciones de la página.', 'Agrega más espacio entre los elementos.'] },
  { title: 'Interfaz y navegación', prompts: ['Haz los botones más grandes y fáciles de identificar.', 'Mejora la navegación para que sea más sencilla.'] },
  { title: 'Imágenes', prompts: ['Agrega imágenes relacionadas con la temática de nuestro sitio.', 'Haz que las imágenes combinen con el estilo visual elegido.'] },
]
