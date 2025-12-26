const pessoas = [
    {nome: "Pedro", idade: 25},
    {nome: "Maria", idade: 17},
    {nome: "João", idade: 30}
]

const maiores = pessoas.filter(pessoa => pessoa.idade >= 18)
const nomes = pessoas.map(pessoa => pessoa.nome)
const soma = pessoas.reduce((acc, val) => acc + val.idade, 0)

for (const pessoa of maiores) {
    console.log(`Pesssoas maiores de idade: ${pessoa.nome} - ${pessoa.idade} anos`)
}
console.log(`Nomes: ${nomes}`)
console.log(`Soma: ${soma}`)