const carro = {
    marca: 'X',
    ano: 'Y',
    info() {
        console.log(`O carro é da marca ${this.marca} e do ano ${this.ano}`)
    }
}

carro.info() // O carro é da marca X e do ano Y