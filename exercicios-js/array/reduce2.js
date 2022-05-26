const alunos = [
    { nome: 'Ferrer', nota: 7.3, bolsista: false },
    { nome: 'Simon', nota: 9.2, bolsista: true },
    { nome: 'Monfils', nota: 9.8, bolsista: false },
    { nome: 'Fognini', nota: 8.7, bolsista: true }
]

// desafio1: todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// desafio2: algum aluno bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))