function tratarErroELancar(erro) { //aqui vc cria uma função para que apareça uma mensagem ao usuário de q ocorreu algum erro e está sendo corrigido
    throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e) {
        tratarErroELancar(e)
    }finally {
        console.log('Final')
    }
    
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)