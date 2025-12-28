// Função construtora + prototype
function Carro(marca, ano) {
    this.marca = marca;
    this.ano = ano;
};
Carro.prototype.info = function() {
    console.log(`Carro: ${this.marca}, Ano: ${this.ano}`);
};

// Classe
class Carro2 {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
    info() {
        console.log(`Carro: ${this.marca}, Ano: ${this.ano}`);
    }
}