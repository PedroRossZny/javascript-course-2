const titulo = document.getElementById("titulo")
const paragrafo = document.querySelector(".texto")
const botoes = document.querySelectorAll("button")

console.log(titulo.textContent) // "Olá Mundo"

titulo.textContent = "Novo título!"
paragrafo.style.color = "blue"
paragrafo.style.fontSize = "20px"

const novoItem = document.createElement("li")
novoItem.textContent = "Item novo"
document.body.appendChild(novoItem) // adiciona ao body

document.body.removeChild(novoItem) // remove do body

const botao = document.getElementById("botao")

botao.addEventListener("click", () => {
    alert("Você clicou no botão!")
})

const campo = document.getElementById("campo")

campo.addEventListener("input", () => {
    console.log("Texto atual:", campo.value)
})