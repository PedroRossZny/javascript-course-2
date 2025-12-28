const pessoaProto = {
    saudar() {
        console.log(`Olá! Eu sou ${this.nome}`)
    }
}

const pedro = Object.create(pessoaProto);
pedro.nome = "Pedro";

const maria = Object.create(pessoaProto);
maria.nome = "Maria";

pedro.saudar(); // Olá! Eu sou Pedro
maria.saudar(); // Olá! Eu sou Maria
// Ambos "herdam" saudar do pessoaProto