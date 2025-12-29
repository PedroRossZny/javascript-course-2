class Veiculo {
    constructor(tipo) {
        this.tipo = tipo
    }
    mover() {
        return " Está se movendo..."
    }
    parar() {
         return " Está parado."
    }
}

class Carro extends Veiculo {
    constructor() {
        super("Carro")
    }
    buzinar() {
        return `O ${this.tipo} está buzinando.`
    }
}

class Bicicleta extends Veiculo {
    constructor() {
        super("Bicicleta")
    }
    pedalar() {
        return `A pessoa na ${this.tipo} está pedalando.`
    }
}

const carro = new Carro()
console.log(`${carro.buzinar()}${carro.parar()}`)

const bicicleta = new Bicicleta()
console.log(`${bicicleta.pedalar()}${bicicleta.mover()}`)