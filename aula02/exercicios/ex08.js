const pessoa = {
    nome: "Pedro",
    falar: function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

pessoa.falar() // "Mewu nome é Pedro"