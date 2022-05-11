{
    {
        {
            { var sera = 'Será?'}
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local) // ReferenceError pois está chamando fora do escopo local.

// Quando vc cria uma variável fora da função ela é GLOBAL
// Fugir de variável global pois ao mesmo tempo q é uma boa coisa pq vc pode acessá-la de qq lugar, também qq sobrescrita q acontecer da variavel, vai sobrescrever em tudo e dar problema