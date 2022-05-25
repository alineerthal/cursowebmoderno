const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro! remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um novo elemento na ultima posição do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista de array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um novo elemento na primeira posição do array
console.log(pilotos)

// splice pode adicionar e remover elementos:

// adicionando:
pilotos.splice(2, 0, 'Bottas', 'Massa') // a lógica aqui -> vai adicionar no indice 2, não vai remover nada, e os nomes serão Bottas e Massa
console.log(pilotos)

// removendo:
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

// método slice retorna um novo array (pega um pedaço do array)
const algunsPilotos1 = pilotos.slice(2) // vai retornar um novo array a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //o índice 1 entra na lista de array, porém o índice 4 não entra
console.log(algunsPilotos2)