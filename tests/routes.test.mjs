import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

let server
let App
let lessons

before(async () => {
  server = await createServer({ server: { middlewareMode: true, ws: false } })
  ;({ App } = await server.ssrLoadModule('/src/App.tsx'))
  ;({ lessons } = await server.ssrLoadModule('/src/data/lessons.ts'))
})

after(async () => { await server?.close() })

function render(pathname) {
  return renderToStaticMarkup(createElement(App, { pathname }))
}

test('inicio y listado muestran solo las clases visibles con su numeración original', () => {
  const home = render('/')
  const listing = render('/clases')
  assert.match(home, /Las grandes ideas/)
  assert.match(home, /href="\/clases"[^>]*>Explorar clases/)
  assert.match(listing, /id="classes-title"/)
  assert.match(listing, /href="\/clases" aria-current="page"/)
  assert.equal((listing.match(/<article /g) || []).length, 2)
  for (const lesson of lessons.filter(item => !item.hidden)) {
    for (const html of [home, listing]) {
      assert.ok(html.includes(`href="/clases/${lesson.slug}"`))
      assert.ok(html.includes(lesson.title))
      assert.ok(html.includes(`Clase ${Number(lesson.number)}`))
      assert.ok(!html.includes('Próximamente'))
    }
  }
  const hidden = lessons.find(item => item.hidden)
  for (const html of [home, listing]) assert.ok(!html.includes(hidden.title))
  assert.match(render(`/clases/${hidden.slug}`), /No encontramos esta página/)
})

test('las clases visibles muestran su título y un enlace de regreso', () => {
  assert.equal(new Set(lessons.map(lesson => lesson.slug)).size, 3)
  for (const lesson of lessons.filter(item => !item.hidden)) {
    const html = render(`/clases/${lesson.slug}`)
    assert.ok(html.includes(`<h1 id="lesson-title">${lesson.title}</h1>`))
    assert.match(html, /href="\/clases"[^>]*>← Volver a las clases/)
    assert.ok(!html.includes('Contenido de ejemplo'))
  }
})

test('las rutas admiten barra final', () => {
  assert.equal(render('/clases/'), render('/clases'))
  for (const lesson of lessons) {
    assert.equal(render(`/clases/${lesson.slug}/`), render(`/clases/${lesson.slug}`))
  }
})

test('rutas y slugs desconocidos ofrecen volver al listado', () => {
  for (const path of ['/desconocida', '/clases/no-existe', '/clases/introduccion/extra']) {
    const html = render(path)
    assert.match(html, /No encontramos esta página/)
    assert.match(html, /href="\/clases"[^>]*>Explorar clases/)
    assert.ok(!html.includes('id="lesson-title"'))
  }
})

test('clase 2 comienza con un desafío, cinco elementos y solo el primer paso', async () => {
  const { initialPrompt, finalPrompt, conversationPhrases, promptExamples } = await server.ssrLoadModule('/src/data/planning.ts')
  const html = render('/clases/planificacion-y-requerimientos')
  const text = html.replace(/<[^>]*>/g, '')
  assert.equal((html.match(/<section /g) || []).length, 3)
  for (const heading of ['¿Qué es un requerimiento?', '¿Cómo construir un buen prompt?', 'Prompts para copiar']) assert.ok(html.includes(heading))
  for (const element of ['Objetivo', 'Contexto', 'Instrucciones', 'Límites', 'Formato']) assert.ok(text.includes(element))
  assert.ok(html.includes('¿Cuál de estas frases es un requerimiento?'))
  assert.ok(!html.includes('Sus requerimientos dicen qué podrá hacer el jugador'))
  for (const prompt of [promptExamples.unclear, promptExamples.clear, initialPrompt]) assert.ok(text.includes(prompt))
  for (const prompt of [finalPrompt, ...conversationPhrases]) assert.ok(!text.includes(prompt))
  assert.equal((html.match(/>Copiar<\/button>/g) || []).length, 3)
  assert.equal((html.match(/role="tab"/g) || []).length, 3)
  assert.equal((html.match(/role="tabpanel"/g) || []).length, 1)
  assert.match(html, /role="tab" aria-selected="true"[^>]*>.*?Comenzar/)
  for (const unwanted of ['Contenido de ejemplo', 'Objetivo de la clase', 'Actividades', 'Materiales']) assert.ok(!html.includes(unwanted))
})

test('cada paso conserva sus prompts y botones, sin mezclar el material de otros pasos', async () => {
  const { PromptStepContent } = await server.ssrLoadModule('/src/components/planning/PromptSteps.tsx')
  const { initialPrompt, finalPrompt, conversationPhrases } = await server.ssrLoadModule('/src/data/planning.ts')
  const groups = { Comenzar: [initialPrompt], Conversar: conversationPhrases, Finalizar: [finalPrompt] }
  for (const [step, prompts] of Object.entries(groups)) {
    const html = renderToStaticMarkup(createElement(PromptStepContent, { step }))
    for (const prompt of prompts) assert.ok(html.includes(prompt))
    for (const [other, otherPrompts] of Object.entries(groups)) {
      if (other !== step) for (const prompt of otherPrompts) assert.ok(!html.includes(prompt))
    }
    assert.equal((html.match(/>Copiar<\/button>/g) || []).length, prompts.length)
    assert.equal((html.match(/role="status"/g) || []).length, prompts.length)
  }
})

test('los fragmentos del ejemplo conservan exactamente el prompt original', async () => {
  const { annotatedPrompt } = await server.ssrLoadModule('/src/components/planning/PromptBuilder.tsx')
  const { promptExamples } = await server.ssrLoadModule('/src/data/planning.ts')
  assert.equal(annotatedPrompt.map(part => part.text).join(''), promptExamples.clear)
  assert.equal(new Set(annotatedPrompt.map(part => part.element)).size, 5)
})

test('clase 3 tiene cinco secciones, repaso de cuatro pasos y enlaces a las herramientas', () => {
  const html = render('/clases/diseno-de-sitios-web-con-ia')
  assert.equal((html.match(/<section /g) || []).length, 5)
  for (const heading of ['Repaso de la clase anterior', '¿Qué es el diseño de software?', '¡Diseñemos nuestro sitio web!', '¡Mejoremos nuestro prototipo!', '¡Guardemos nuestros avances!']) assert.ok(html.includes(heading))
  assert.equal((html.match(/role="tab"/g) || []).length, 7)
  assert.equal((html.match(/role="tabpanel"/g) || []).length, 2)
  assert.match(html, /Revisar requerimientos/)
  for (const url of ['https://gemini.google.com/', 'https://stitch.withgoogle.com/', 'https://drive.google.com/']) assert.ok(html.includes(`href="${url}"`))
  for (const title of ['Colores y estilos', 'Logotipos', 'Imágenes', 'Interfaces y prototipos', 'Requerimientos', 'Prototipos visuales']) assert.ok(html.includes(title))
  assert.ok(html.includes('¡Ya tenemos nuestro diseño! En las próximas clases comenzaremos a construirlo.'))
  const ids = [...html.matchAll(/ id="([^"]+)"/g)].map(match => match[1])
  assert.equal(new Set(ids).size, ids.length, 'Los dos selectores deben usar identificadores únicos')
  assert.equal((html.match(/<details /g) || []).length, 4)
})

test('los nuevos pasos de clase 3 y los ocho ajustes conservan sus textos y botones de copia', async () => {
  const { RequirementsReview, DesignPromptContent } = await server.ssrLoadModule('/src/components/design/DesignPromptSteps.tsx')
  const { reviewRequirementsPrompt, designSteps, improvementGroups } = await server.ssrLoadModule('/src/data/design.ts')
  const review = renderToStaticMarkup(createElement(RequirementsReview))
  assert.ok(review.includes(reviewRequirementsPrompt))
  assert.match(review, />Copiar<\/button>/)
  for (const step of designSteps) {
    const html = renderToStaticMarkup(createElement(DesignPromptContent, { step }))
    assert.ok(html.includes(step.prompt))
    assert.ok(html.includes(step.description))
    assert.equal((html.match(/>Copiar<\/button>/g) || []).length, 1)
    assert.match(html, /role="status"/)
    for (const other of designSteps) if (other !== step) assert.ok(!html.includes(other.prompt))
  }
  const html = render('/clases/diseno-de-sitios-web-con-ia')
  const improvements = improvementGroups.flatMap(group => group.prompts)
  assert.equal(improvements.length, 8)
  for (const prompt of improvements) assert.ok(html.includes(prompt))
  assert.equal((html.match(/>Copiar<\/button>/g) || []).length, 10)
  assert.ok(!render('/clases/planificacion-y-requerimientos').includes('Revisar requerimientos'))
})

test('Grupos muestra seis equipos, 19 nombres abreviados y sus correos copiables', async () => {
  const { groups } = await server.ssrLoadModule('/src/data/groups.ts')
  const html = render('/grupos')
  assert.equal(groups.length, 6)
  assert.equal(groups.flatMap(group => group.members).length, 19)
  assert.equal((html.match(/<article /g) || []).length, 6)
  assert.equal((html.match(/>Copiar correo<\/button>/g) || []).length, 6)
  assert.equal((html.match(/role="status"/g) || []).length, 6)
  assert.match(html, /href="\/grupos" aria-current="page"/)
  assert.equal(render('/grupos/'), html)
  for (const [index, group] of groups.entries()) {
    assert.equal(group.number, index + 1)
    assert.equal(group.email, `talleriaescuelapjmb.grupo${index + 1}@gmail.com`)
    assert.ok(html.includes(`Grupo ${group.number}`))
    assert.ok(html.includes(group.email))
    assert.ok(html.includes(`Copiar correo del grupo ${group.number}`))
    assert.equal(group.members.length, group.number === 6 ? 4 : 3)
    for (const member of group.members) {
      assert.match(member, /^\p{L}+ \p{L}\.$/u, 'Solo primer nombre e inicial de apellido')
      assert.ok(html.includes(member))
    }
  }
  for (const route of ['/', '/clases', '/clases/planificacion-y-requerimientos', '/clases/diseno-de-sitios-web-con-ia']) {
    assert.ok(render(route).includes('href="/grupos"'))
  }
})
