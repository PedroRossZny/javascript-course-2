const pessoa = {
    nome: "Pedro",
    idade: 25,
    falar: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};

console.log(pessoa.nome); // Pedro
pessoa.falar(); // Olá, meu nome é Pedro
