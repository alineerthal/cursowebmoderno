const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
// forEach se usa com arrays
fabricantes.forEach(imprimir) //para cada elemento no array, ele vai chamar a função de volta

fabricantes.forEach(fabricante => console.log(fabricante))