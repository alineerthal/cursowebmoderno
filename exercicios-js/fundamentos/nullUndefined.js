let valor // não inicializado
console.log(valor) // undefined
//console.log(valor2) // is not defined - n foi nem declarada

valor = null // null nao está apontando para nenhum local de memória; ausência de valor; aqui eu inicializei porém n aponta para nada
console.log(valor)
//console.log(valor.toString()) // TypeError - acessando uma variável q é nula

const produto = {}
console.log(produto.preco)
//console.log(produto.preco.a) // TypeError - tentando acessar uma propriedade de um atributo q n foi definido
console.log(produto) // produto está definido como vazio {}

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// caso a intenção seja deletar o atributo, use
//delete produto.preco
console.log(produto)

produto.preco = null // ou seja, o produto está sem preço, mas ele foi declarado
console.log(!!produto.preco)
console.log(produto)