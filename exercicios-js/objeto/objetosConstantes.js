// pessoa -> 123 endereço de memória -> {...}
const pessoa = { nome: 'João' }
console.log(pessoa.nome)
pessoa.nome = 'Pedro' //a constante continua apontando pro endereço de memória, porém o dado q é apontado se modifica. pessoa n se altera
console.log(pessoa.nome)

// pessoa -> 456 -> {...} tentanto modificar o endereço de memoria q pessoa está apontando
//pessoa = { nome: 'Ana' }
//console.log(pessoa.nome)

Object.freeze(pessoa) //objeto congelado. a partir daqui tornei o objeto em si constante tb. n consegue alterar mais o objeto pessoa
pessoa.nome = 'Ramos'
console.log(pessoa.nome)