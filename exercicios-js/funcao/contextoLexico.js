const valor = 'Global'

// função sendo declarado dentro do contexto do node, global
function minhaFuncao() {
    console.log(valor)
}

minhaFuncao()

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

// a função carrega consigo a informação do contexto no qual ela foi declarada
// por conta do contexto léxico, ou seja, o contexto aonde a função foi criada, no caso, dentro de Global, aqui, vai ser impresso Global tb
exec() 
