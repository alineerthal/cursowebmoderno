// lado esquerdo, entre colchetes, é o operador destructuring
function rand([ min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // se min for > max, inverta o resultado para max, min
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([])) // assume os valores padrões, ou seja, 0 e 1000
console.log(rand())