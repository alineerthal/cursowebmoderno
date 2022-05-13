/*
 * V e V -> V
 * V e F -> F
 * F e V -> F
 * F e F -> F
 * -----------
 * V ou V -> V
 * V ou F -> V
 * F ou V -> V
 * F ou F -> F
 * -----------
 * V xor V -> F
 * V xor F -> V
 * F xor V -> V
 * F xor F -> F
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // diferença tb simula um xor
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // implicitamente aqui está sendo criado um objto com chave/valor
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))