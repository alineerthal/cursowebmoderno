/* variáveis definidas com a palavra reservada var, tem escopo global e de função
* variáveis definidas com a palavra reservada let tem escopo global, de função e escopo de bloco
* mesmo n sendo uma função, qq bloco, o let vai ter o escopo apenas dentro daquele bloco, ou seja, visível apenas dentro daquele bloco
*/

var numero = 1

{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)