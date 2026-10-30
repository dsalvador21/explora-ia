export type Group = {
  number: number
  members: string[]
  email: string
}

// Publicación autorizada: solo primer nombre e inicial del primer apellido.
const membersByGroup = [
  ['Andrés A.', 'Ebolet A.', 'Lusbriana C.'],
  ['Mia O.', 'Julieta V.', 'Sofia C.'],
  ['Christian F.', 'Félix L.', 'Fabiola M.'],
  ['Victoria D.', 'Joseph D.', 'Javier S.'],
  ['Khristyan S.', 'Isaias R.', 'Tiffany M.'],
  ['Félix B.', 'Lusbrianny C.', 'Enaim Q.', 'Hector M.'],
]

export const groups: Group[] = membersByGroup.map((members, index) => ({
  number: index + 1,
  members,
  email: `talleriaescuelapjmb.grupo${index + 1}@gmail.com`,
}))
