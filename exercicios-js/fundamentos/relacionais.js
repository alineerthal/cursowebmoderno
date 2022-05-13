// operação com operadores relacionais sempre terá como resultado true or false

console.log('01)', '1' == 1) // aqui está comparando o valor e não os tipos
console.log('02)', '1' === 1) // aqui está comparando o TIPO...um é string e outro é number
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // 01 de janeiro de 1970 marco zero
const d2 = new Date(0)
// nestes dois casos abaixo, ele compara referência de memória
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // aqui nesse caso a comparação é entre number. os dois são number e os dois tem o mesmo valor
console.log('12)', undefined == null)
console.log('12)', undefined === null)