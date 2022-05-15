// JavaScript desconsidera identação
/* Em JS, ao usar apenas uma sentença de código, é permitido não usar as chaves, porém 
 * ele vai considerar apenas uma sentença. No caso abaixo, temos 2 sentenças. 
 * JS vai ignorar uma e executar a outra.
*/

function teste1(num) {
    if (num > 7)
        console.log(num)
    
    console.log('Final') //essa sentença está fora do bloco IF, sendo portanto executada independente de qq coisa
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); { //cuidado com o ; / não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)