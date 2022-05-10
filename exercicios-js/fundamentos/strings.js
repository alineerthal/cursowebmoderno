const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // não gera erro; apenas retorna nada
console.log(escola.length)
console.log(escola.charCodeAt(3)) // retorna o valor do indice 3 na tabela ascii
console.log(escola.indexOf('3')) // retorna o índice associado ao '3'

console.log(escola.substring(1)) // retorna o valor a partir do índice um em diante
console.log(escola.substring(0, 3)) // retorna o valor a partir do índice 0 até o índice 3, exclusivo

console.log('Escola '.concat(escola.concat("!")))
console.log('Escola ' + escola + "!" )
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) // transforma em um array