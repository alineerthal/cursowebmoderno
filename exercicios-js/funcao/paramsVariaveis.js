// função q n rebece params
// arguments é um array interno
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) // 0 pois ele n tem nenhum arguments e, portanto, n entra no for
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c')) // como o let soma inicializou com 0, então vai ser concatenado com o texto