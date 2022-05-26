const alunos = [
    { nome: 'Goffin', nota: 7.3, bolsista: false },
    { nome: 'Verdasco', nota: 9.2, bolsista: true },
    { nome: 'Ostapenko', nota: 9.8, bolsista: false },
    { nome: 'Osaka', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)