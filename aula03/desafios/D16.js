class Banco {
    #saldo = 0

    depositar(valor) {
        this.#saldo += valor
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`)
    }

    get saldo() {
        return `Saldo: R$ ${this.#saldo.toFixed(2)}`
    }
}

const banco = new Banco()
console.log(banco.saldo) // Saldo: R$ 0.00
banco.depositar(150) // Depósito de R$ 150.00 realizado com sucesso!
console.log(banco.saldo) // Saldo: R$ 150.00