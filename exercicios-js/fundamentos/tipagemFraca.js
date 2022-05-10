// tipagem fraca não significa que ela não tem tipo; tem tipo sim mas uma hora pode ser texto, outra hora número, etc

let qualquer = 'Legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer)

// Evitar nomes genéricos e siglas
let valor = ''
let numero = 1
let pqp = false // Produto Químico Perigoso... kkk