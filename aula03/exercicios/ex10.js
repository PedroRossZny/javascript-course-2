function Carro(marca, ano) {
    this.marca = marca;
    this.ano = ano;
}

const carro1 = new Carro("Toyota", 2020);
console.log(carro1.marca); // Toyota