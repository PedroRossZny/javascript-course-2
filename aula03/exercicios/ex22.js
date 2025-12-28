class Pessoa {
    constructor(nome) {
        this._nome = nome; // por convenção, _ indica "privado" (não é de fato)
    }
    get nome() {
        return this._nome.toUpperCase();
    }
    set nome(novoNome) {
        if (!novoNome) throw new Error("Nome inválido");
        this._nome = novoNome;
    }
}

const p = new Pessoa("Pedro");
console.log(p.nome); // PEDRO
p.nome = "Maria";
console.log(p.nome); // MARIA
// p.nome = ""; // lança erro: Nome inválido