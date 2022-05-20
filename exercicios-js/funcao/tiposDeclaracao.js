console.log(soma(10, 4))
// em function declaration posso chamar o console antes da função:
// function declaration:
function soma(x, y) {
    return x + y
}

// declarando função anônima e atribuindo-a a uma variável ou const:
// function expression:
const sub = function(x, y) {
    return x - y
}

console.log(sub(10, -4))

// function declaration + function expression = named function expression:
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(10, -4))