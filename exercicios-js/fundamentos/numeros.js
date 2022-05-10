const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = 2.2

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // aqui por mais q eu tenha colocado um float, em JAVA vai dizer q é true, ou seja, que é inteiro
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3)) // aqui o JAVA já reconhece que é um float pq n sofre arredondamento
console.log(typeof peso1)
console.log(typeof peso2)

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // função toFixed para dizer qts casas decimais vc quer q apareça

// converter valor numérico em string:
console.log(media.toString())

// transformar a media em string porém com valor binário:
console.log(media.toString(2))

console.log(typeof media)
console.log(typeof Number)