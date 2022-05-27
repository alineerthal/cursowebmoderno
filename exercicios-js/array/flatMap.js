/*
 * flatmap é um map junto com concat -> ele cria um único array com os elementos.
 * por exemplo, se tiver um array de arrays
*/
// array de objetos:
const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, { 
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    },{ 
        nome: 'Roberto',
        nota: 7.3
    }]
}]

// extair um array com as notas, independente da turma:
const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

// criando um array unico com o flatmap
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)