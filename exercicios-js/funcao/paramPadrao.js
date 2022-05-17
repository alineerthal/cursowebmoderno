// estrategia 1 para gerar valor padrão:
// aqui n tem perigo de ser null ou undefined pois usamos o OU, o q gera valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))
console.log(soma1(0, 0, 0)) // 0 resolve para falso nessa estratégia, portanto, ele assume o valor padrão de 1 nos 3

// estratégias 2, 3, e 4 para gerar valor padrão:
// estratégia mais segura
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // se n for um numero, ele pegará o valor padrão 1
    return a + b + c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0, 0))

// valor padrão do es2015:
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(1, 2, 3))
console.log(soma3(0, 0, 0))