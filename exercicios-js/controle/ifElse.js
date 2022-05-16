const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado() //aqui tem a saída de reprovado pq ele é undefined, ou seja, false
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // vai tentar fazer a comparação se Epa é maior ou igual a 7. Como não é, pq é uma string, ele retorna reprovado