// array em JS é um obj especial, tem estrutura heterogênea
// a boa prática diz q tem q trabalhar com dados homogêneos dentro do array
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Nadal') // forma n recomendada para criar um array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Nadal'] // forma recomendada
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Vinolas'
aprovados.push('Federer') // adiciona um novo elemento na ultima posição
console.log(aprovados.length)

aprovados[9] = 'Djoko'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

console.log(aprovados)
aprovados.sort() // altera a ordem dos elementos no array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1]) // o delete n altera a ordem dos elementos no array, mesmo depois de ser excluído...cada um permanece na sua posição original, ou seja, indice 2 continua sendo índice 2 e no lugar do elemento deletado, aparecerá undefined
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Nadal']
// primeiro param é o índice e o segundo param é a qtde de elementos q quer excluir
aprovados.splice(1, 1) // aqui ao deletar o elemento, o outro toma conta do lugar do deletado; pode ser usado para adicionar elementos tb
console.log(aprovados)
console.log(aprovados[1])