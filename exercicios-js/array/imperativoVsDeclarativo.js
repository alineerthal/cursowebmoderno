const alunos = [
    { nome: 'Shapovalov', nota: 7.9 },
    { nome: 'Lopez', nota: 9.2 }
]

// abordagem imperativa(mais importante a forma como tem q ser feita do q o resultado propriamento dito) 
let total1 = 0
for (let i = 0; i < alunos.length; i++ ) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// abordagem declarativa -> tem mais reuso de códigos pois foram criadas funções q podem ser reutilizadas
// preocupada com o q tem q ser feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)