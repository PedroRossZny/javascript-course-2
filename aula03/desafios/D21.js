class Cofre {
    #valor = 0

    depositar(valor) {
        this.#valor += valor
    }

    retirar(valor) {
        if (valor > this.#valor) {
            console.log('Saldo insuficiente.')
        } else {
            this.#valor -= valor
        }
    }

    get total() {
        return `Total: R$ ${this.#valor.toFixed(2)}`
    }
}

const minhaConta = new Cofre()
console.log(minhaConta.total) // Total: R$ 0.00
minhaConta.retirar(10) // Saldo insuficiente
minhaConta.depositar(20.5)
console.log(minhaConta.total) // Total: R$ 20.00
minhaConta.retirar(10)
console.log(minhaConta.total) // Total: R$ 10.50