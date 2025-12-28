class Carro {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }

    info() {
        console.log(`Carro: ${this.marca}, Ano: ${this.ano}`);
    }
}

const carro1 = new Carro("Toyota", 2022);
carro1.info(); // Carro: Toyota, Ano: 2022