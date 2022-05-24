function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__) // qdo se cria um obj a partir de uma função construtora, usando o new, o protótipo desse obj automaticamente aponta para a função q vc criou .prototype

MeuObjeto.prototype.nome = 'Anônimo' // qq obj criado a partir dessa função construtora vai ter dentro dele (o pai) o atributo nome
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura:
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // depois de object e prototype n tem mais nada por isso q ele é nulo
console.log(Object.prototype.__proto__ === undefined)