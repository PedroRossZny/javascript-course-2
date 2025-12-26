const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(n => n * 2)
console.log(dobrados) // [2, 4, 6, 8]

const idades = [12, 18, 25, 30]
const maiores = idades.filter(idade => idade >= 18)
console.log(maiores) // [18, 25, 30]

const valores = [10, 20, 30]
const soma = valores.reduce((acc, val) => acc + val, 0)
console.log(soma) // 60

const produto = valores.reduce((acc, val) => acc * val, 1)
console.log(produto) // 6000