const sequencia = {
    _valor: 1, // convenção de q essa variável é para ser acessada internamente, dentro do obj sequencia
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)