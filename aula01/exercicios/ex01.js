// var: escopo de função ou global
var nome = "Pedro";
console.log(nome); // Pedro
var nome = "Maria"; // pode redeclarar
console.log(nome); // Maria

// let: escopo de bloco
let idade = 25;
console.log(idade); // 25
// let idade = 30; ❌ ERRO: não pode redeclarar no mesmo escopo
idade = 30; // pode reatribuir
console.log(idade); // 30

// const: valor constante
const PI = 3.14159;
console.log(PI); // 3.14159
// PI = 3.14; ❌ ERRO: não pode reatribuir