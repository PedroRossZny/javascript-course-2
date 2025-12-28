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
        super("Moto"); // chama o constructor de Veiculo
        this.marca = marca;
    }
    info() {
        console.log(`Moto da marca: ${this.marca}`);
    }
}

class Carro extends Veiculo {
    constructor(marca) {
        super("Carro");
        this.marca = marca;
    }
}

const m = new Moto("Honda");
m.mover(); // Moto está se movendo...
m.info(); // Moto da marca: Honda

const c = new Carro("Honda");
c.mover(); // Carro está se movendo...