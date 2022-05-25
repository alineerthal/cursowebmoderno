// JSON é formato de dados; textual
const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c} }
console.log(JSON.stringify(obj)) // a saída exclui a função, ou seja, n retorna soma pq JSON é formato de dados apenas

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))

//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))

console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))