const alunos = [
    {nome: "Pedro", nota: 9.5},
    {nome: "Maria", nota: 7},
    {nome: "Guilherme", nota: 4.5}
]

const acimaMedia = alunos
    .filter(a => a.nota >= 7)
    .map(a => a.nome)

console.log(acimaMedia)