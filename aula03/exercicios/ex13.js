class Conta {
    #saldo = 0; // atributo privado


    depositar(valor) {
        this.#saldo += valor;
    }

    get saldo() {
        return this.#saldo;
    }
}

const conta = new Conta();
conta.depositar(100);
console.log(conta.saldo); // 100