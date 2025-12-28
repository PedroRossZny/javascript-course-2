const usuario = {
    nome: "Pedro",
    idade: 25,
    saudar() {
        console.log(`Olá, eu sou ${this.nome}`)
    }
}

usuario.saudar(); // Olá, eu sou Pedro