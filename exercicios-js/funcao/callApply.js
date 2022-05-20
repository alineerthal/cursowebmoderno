/*
 * diferença entre call e apply é a forma como vc passa os parâmetros 
*/

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

// aqui tem q usar o global pq foi declarado como this 
global.preco = 20
global.desc = 0.1
console.log(getPreco()) // chamando diretamente
console.log(produto.getPreco()) //chamando a partir de um objeto

const carro = { preco: 49990, desc: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, 'R$'))
console.log(getPreco.apply(global, [0.17, 'R$'])) //array