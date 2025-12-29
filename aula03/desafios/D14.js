class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

const p = new Pessoa("Pedro", 20)
p.apresentar()
// Olá, meu nome é Pedro e tenho 20 anos.