const precos = [10, 20, 30, 40]

const total = precos.reduce((acc, val) => acc + val, 0)
const produto = precos.reduce((acc, val) => acc * val, 1)

console.log(`Total da soma dos preços: R$${total.toFixed(2)}`)
console.log(`Produto de todos os preços: R$${produto.toFixed(2)}`)