function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percent) {
    this.percent = percent
    console.log(`Preço após o desconto de ${this.percent}%: R$ ${(this.preco - ((this.percent / 100) * this.preco)).toFixed(2)}`)
}

const computador = new Produto("Computador", 5000)
console.log(`Preço: R$ ${computador.preco.toFixed(2)}`)
computador.desconto(10)

const cadeira = new Produto("Cadeira", 700)
console.log(`Preço: R$ ${cadeira.preco.toFixed(2)}`)
cadeira.desconto(20)