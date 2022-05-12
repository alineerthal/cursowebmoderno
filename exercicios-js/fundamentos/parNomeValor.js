// par nome-valor
const saudacao = 'Opa!' // contexto léxico 1: é o local no qual sua variável foi definida fisicamente no código

function exec() {
    const saudacao = 'Fala aê!' // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome-valor
const cliente = {
    nome: 'Pedro',
    idade: 38,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123,
        bairro: 'Amendoeira'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)