const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar // aqui n aponta mais para o this, por isso o resultado é undefined
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // bind vc passa o obj no qual vc quer q seja resolvido para o this
falarDePessoa()
// o bind é o responsável por amarrar um determinado obj para q ele seja o dono da execução naquele momento

const falar2 = pessoa.falar
falar2()