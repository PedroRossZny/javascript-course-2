class Pessoa {
    constructor(nome) { // chamado automaticamente por new
        this.nome = nome;
    }
    falar() { // vai para Pessoa.prototype
        console.log(`Olá, eu sou ${this.nome}`);
    }
}

const p = new Pessoa("Ana");
p.falar(); // Olá, eu sou Ana