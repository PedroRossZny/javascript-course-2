// variáveis
var a = 20
let b = 20
const c = 20

// teste var
console.log(`Idade: ${a}`)
a++
console.log(`Envelheceu um ano: ${a}`)
var a = 72
console.log(`Peso: ${a}kg`)

// teste let
console.log(`Idade: ${b}`)
b++
console.log(`Envelheceu um ano: ${b}`)
/*
let b = 72
console.log(`Peso: ${b}kg`) ❌ ERRO: não pode redeclarar
*/

// teste const
console.log(`Idade: ${c}`)
/*
c++
console.log(`Envelheceu um ano: ${c}`) ❌ ERRO: não pode reatribuir
var c = 72
console.log(`Peso: ${c}kg`) ❌ ERRO: não pode redeclarar
*/