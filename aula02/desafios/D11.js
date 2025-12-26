const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const soma = numeros.reduce((acc, val) => acc + val, 0)

console.log(`Números: ${numeros}`)
console.log(`Soma: ${soma}`)