// Laço for - repetição

for (var i = 0; i < 10; i++) {
    console.log(i)
}
// var n possui escopo de bloco, portanto, aqui, neste ex, consegue-se acessar mesmo após o bloco, sendo portanto, o i visível dentro e fora do bloco
console.log('i = ', i) //o valor de i aqui vai ser 10, pois é o valor q fez com q ele saísse do laço, pois o 9 ainda é menor do q 10; já o 10 não é menor do q 10