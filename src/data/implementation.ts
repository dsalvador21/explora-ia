// Recorrido práctico de la Clase 4.
export const implementationSteps = [
  {
    label: 'Planificar',
    title: 'Preparar el proyecto en Visual Studio Code',
    objective: 'Crear y organizar el proyecto antes de colocar el código.',
    instructions: 'Compartan sus requerimientos y diseño. Sigan la guía de la IA para preparar las carpetas y archivos en VSC.',
    hint: 'Reemplacen los campos entre corchetes. En este paso preparan el proyecto; todavía no necesitan código.',
    prompt: `Somos estudiantes de 7° básico y vamos a construir nuestro primer sitio web. Nunca hemos utilizado Visual Studio Code.

Nuestros requerimientos son:

[PEGAR REQUERIMIENTOS]

Nuestro diseño es:

[DESCRIBIR EL DISEÑO O ADJUNTAR UNA CAPTURA]

El sitio se construirá principalmente con HTML, CSS y JavaScript.

Ayúdanos a preparar el proyecto en Visual Studio Code antes de comenzar a colocar el código.

Explícanos paso a paso:

1. Cómo crear la carpeta del proyecto y abrirla en Visual Studio Code.
2. Qué carpetas y archivos necesitamos y cómo crearlos.
3. Cómo organizar las imágenes y otros recursos.
4. Para qué servirá cada archivo y cómo guardar los cambios.
5. Si alguna funcionalidad necesita una base de datos, un servidor u otra herramienta más avanzada, indícalo y explica de forma sencilla qué necesitaríamos y cómo organizar esa parte del proyecto.

No generes el código del sitio todavía. Utiliza un lenguaje sencillo y haznos preguntas si falta información importante.`,
  },
  {
    label: 'Generar código',
    title: 'Generar la primera versión',
    objective: 'Obtener el código y saber dónde colocar cada parte.',
    instructions: 'Continúen en la misma conversación. Copien cada bloque en el archivo indicado por la IA y guarden los cambios.',
    hint: 'Sigan la estructura preparada en VSC. Si la respuesta es larga, pidan un archivo a la vez.',
    prompt: `Ahora queremos implementar la primera versión de nuestro sitio web siguiendo la estructura que preparamos en Visual Studio Code.

Utiliza principalmente HTML, CSS y JavaScript y respeta nuestros requerimientos y el diseño del prototipo.

Instrucciones:

1. Genera el código completo de cada archivo que necesitamos.
2. Indica claramente el nombre y la carpeta de cada archivo, dónde pegar cada bloque y si debemos crear o reemplazar su contenido.
3. Conecta correctamente HTML con CSS y JavaScript.
4. Respeta nuestros requerimientos y el diseño del prototipo.
5. Construye primero las funciones principales.
6. Utiliza código sencillo y organizado.
7. No inventes funcionalidades que no hemos solicitado.
8. Si alguna función requiere un servidor, una base de datos u otra herramienta más avanzada, explícanos cómo organizar esa parte del proyecto, qué archivos necesitamos y cómo prepararlos.

Explica cómo abrir o ejecutar el proyecto según las herramientas que necesite.

Somos principiantes: indícanos dónde colocar cada cosa. Si el código es demasiado extenso, entrégalo archivo por archivo, sin omitir partes.`,
  },
  {
    label: 'Probar',
    title: 'Visualizar y probar nuestra página',
    objective: 'Abrir la página y comprobar que funciona.',
    instructions: 'Guarden los archivos y sigan las indicaciones de la IA para abrir y probar su sitio.',
    hint: 'Si algo falla, describan qué esperaban y qué sucedió. Más abajo tienen prompts cortos para pedir ayuda.',
    prompt: `Ya copiamos el código de nuestro sitio web en Visual Studio Code.

Explícanos cómo visualizarlo en el navegador.

Queremos aprender:

1. Cómo abrir index.html o ejecutar el proyecto si necesita un servidor.
2. Cómo actualizar la página después de realizar cambios.
3. Cómo probar las funcionalidades principales.
4. Qué información debemos entregarte si encontramos algún error.

Danos instrucciones sencillas y ordenadas.

No utilices herramientas adicionales si no son necesarias.`,
  },
  {
    label: 'Mejorar',
    title: 'Realizar cambios y mejoras',
    objective: 'Mejorar la página web a partir de los resultados observados.',
    instructions: 'Describan un cambio concreto y compartan su código actual si la IA lo necesita.',
    hint: 'Reemplacen [DESCRIBIR CAMBIO]. Prueben el cambio antes de pedir el siguiente.',
    prompt: `Queremos mejorar nuestro sitio web.

Este es el cambio que necesitamos:

[DESCRIBIR CAMBIO]

Ayúdanos a realizarlo utilizando HTML, CSS y JavaScript.

Antes de generar código, revisa la información que ya conoces de nuestro proyecto.

Necesitamos que:

1. Identifiques qué archivos debemos modificar.
2. Nos expliques brevemente qué cambiará.
3. Entregues el código actualizado de los archivos necesarios.
4. Indiques claramente dónde debemos copiarlo.
5. Evites modificar partes que ya funcionan correctamente.
6. Nos expliques cómo comprobar que el cambio funcionó.

Si no tienes el código actual o necesitas información adicional, pídenos que lo compartamos.

No inventes contenido ni elimines funcionalidades existentes sin consultarnos.`,
  },
]

export const helpPrompts = [
  {
    title: 'Corregir un problema',
    prompt: `Tenemos este problema: [DESCRIBIR PROBLEMA]. Ayúdanos a encontrar la causa y corregir solo lo necesario. Pídenos el código o el error si lo necesitas e indica qué archivo cambiar y dónde pegar la corrección.`,
  },
  {
    title: 'Entender el código',
    prompt: `No entendemos esta parte del código: [PEGAR CÓDIGO]. Explícanos para qué sirve con palabras sencillas y un ejemplo, como para estudiantes de 7° básico.`,
  },
  {
    title: 'Saber dónde pegarlo',
    prompt: `No sabemos dónde colocar el código que nos diste. Indica la carpeta y el archivo exactos, y si debemos crear un archivo, agregar el código o reemplazar una parte. Guíanos paso a paso.`,
  },
  {
    title: 'Ir más despacio',
    prompt: `Explícanos el siguiente paso de forma más sencilla. Danos una instrucción a la vez y espera a que confirmemos antes de continuar.`,
  },
]
