// Object.preventExtensions -> não vai permitir q seu objeto seja extendido
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // é permitido alterar o nome, pois ele n está com freeze(); o q n pode é adicionar novos atributos
produto.descricao = 'Borracha escolar branca' // aqui n foi permitido adicionar novo atributo
delete produto.tag
console.log(produto)

// Object.seal -> selar (n consegue excluir nem adicionar novos atributos mas consegue modificar os valores dos atributos)
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) 
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes