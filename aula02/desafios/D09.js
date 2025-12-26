const nomes = ["Pedro", "Maria", "João", "Ana"]

const iniciais = nomes.map(nome => nome.charAt(0))

console.log(`Nomes: ${nomes}`)    // ["Pedro", "Maria", "João", "Ana"]
console.log(`Iniciais: ${iniciais}`) // ["P", "M", "J", "A"]