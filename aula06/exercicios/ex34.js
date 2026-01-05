const nomes = ["Pedro", "Maria", "Ana", "João"];
nomes.sort();
console.log(nomes); // ["Ana", "João", "Maria", "Pedro"]

const numeros = [40, 1, 5, 200];
numeros.sort((a, b) => a - b); // ordem crescente
console.log(numeros); // [1, 5, 40, 200]