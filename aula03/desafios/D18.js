const contatoProto = {
    mostrar() {
        console.log(`Nome: ${this.nome}, Telefone: ${this.telefone}`)
    }
}

const pedro = Object.create(contatoProto)
pedro.nome = "Pedro"
pedro.telefone = "99 99999-9999"
pedro.mostrar() // Nome: Pedro, Telefone: 99 99999-9999