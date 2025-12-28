class Veiculo {
    constructor(tipo) {
        this.tipo = tipo;
    }

    mover() {
        console.log(`${this.tipo} está se movendo...`);
    }
}

class Moto extends Veiculo {
    constructor(marca) {
        super("Moto"); // chama o constructor da classe pai
        this.marca = marca;
    }

    info() {
        console.log(`Moto da marca: ${this.marca}`);
    }
}

const minhaMoto = new Moto("Yamaha");
minhaMoto.mover(); // Moto está se movendo...
minhaMoto.info(); // Moto da marca: Yamaha
