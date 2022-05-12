// hoisting -> içamento

console.log('a = ', a) // saída: variável a undefined. ela existe, porém n foi definida
var a = 2
console.log('a = ', a)

// o efeito de hoisting não acontece com let
console.log('b = ', b)
let b = 3
console.log('b = ', b)