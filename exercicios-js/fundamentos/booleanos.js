let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //string vazia mas com espaço
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // resolvido para verdadeiro vai ser true

console.log('os falsos...')
console.log(!!0)
console.log(!!'') //string vazia sem dar espaço
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) //resolvido para false vai ser false

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' ')) // true pq pelo menos um deles tem q ser verdadeiro e, como temos um verdadeiro, se torna true

let nome = ''
console.log(nome || 'Desconhecido')