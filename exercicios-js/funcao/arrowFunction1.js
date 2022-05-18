let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

// quando vc tem apenas um param, pode retirar os parênteses e as chaves e o return pois é uma função de unica linha
dobro = a => 2 * a
console.log(dobro(Math.PI.toFixed(2)))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())