const nome = 'Rebeca'
const concatenacao = 'Olá, ' + nome + '!'
const template = `
    Ola,
    ${nome}!`

console.log(concatenacao, template)

// expressões:
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // função arrow para deixar tudo em maiúsculo
console.log(`Ei... ${up('cuidado')}!`) // aqui chamou a função para deixar somente a palabra cuidado em maiúsculo