const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10.0
console.log(valores)
console.log(valores.length)

// abaixo é válido, porém o ideal é criar um array para cada tipo e não misturar conforme abaixo
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// vai sacar o ultimo valor do array
console.log(valores.pop())

delete valores[0]
console.log(valores)

console.log(typeof valores)