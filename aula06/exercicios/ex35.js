const pessoas = [
    {nome: "Pedro", idade: 25},
    {nome: "Maria", idade: 17},
    {nome: "João", idade: 30}
];

const maiorDeIdade = pessoas
    .filter(p => p.idade >= 18)
    .map(p => p.nome);

console.log(maiorDeIdade); // ["Pedro", "João"]