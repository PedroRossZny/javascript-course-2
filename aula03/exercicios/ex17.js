function Pessoa(nome) {
    this.nome = nome;
}
// Colocamos métodos no prototype
Pessoa.prototype.falar = function() {
    console.log(`Olá, eu sou ${this.nome}`);
};

const p1 = new Pessoa("Pedro");
const p2 = new Pessoa("Maria");

p1.falar(); // Olá, eu sou Pedro
p2.falar(); // Olá, eu sou Maria

const p = new Pessoa("João");
// p.__proto__ aponta para Pessoa.prototype