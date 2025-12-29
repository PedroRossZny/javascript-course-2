class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
        if (this.cargo) {
            console.log(`Meu cargo é ${this.cargo}.`)
        }
    }
}

class Funcionario extends Pessoa {
    constructor(cargo) {
        super("Pedro", 20)
        this.cargo = cargo
    }
}

const f = new Funcionario("Desenvolvedor")
f.apresentar()
// Olá, meu nome é Pedro e tenho 20 anos.
// Meu cargo é Desenvolvedor.

const p = new Pessoa("Ana", 30)
p.apresentar()
// Olá, meu nome é Ana e tenho 30 anos.