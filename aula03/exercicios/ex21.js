class Conta {
    #saldo = 0; // privado

    depositar(valor) {
        if (valor <= 0) return;
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente");
            return;
        }
        this.#saldo -= valor;
    }
    get saldo() { // getter: leitura controlada
        return this.#saldo;
    }
}

const conta = new Conta();
conta.depositar(200);
conta.sacar(50);
console.log(conta.saldo); // 150
// conta.#saldo // ❌ ERRO: campo privado