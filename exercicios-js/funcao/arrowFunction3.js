let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {} 
comparaComThis = comparaComThis.bind(obj) // fazendo isso, agora aponta para o escopo local e não mais para o global
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// o this na função arrow é um this associado ao contexto no qual a função foi escrita
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)