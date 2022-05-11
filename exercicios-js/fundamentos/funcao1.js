// Função nada mais é que um trecho de código que vc deu um nome para ele e pode ser re-usado aonde quiser

// Funçao sem retorno:
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //passando apenas um parâmetro, o outro será considerado undefined e a soma de um inteiro com undefined será NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // não dá erro...vai somar apenas os dois primeiros

// Função com retorno:
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))