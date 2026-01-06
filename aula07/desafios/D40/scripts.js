const aumentar = document.getElementById("aumentar")
const diminuir = document.getElementById("diminuir")
const paragrafo = document.getElementById("paragrafo")
const numero = document.getElementById("numero")
let n = 0

aumentar.addEventListener("click", () => {
    n ++
    numero.textContent = n
})

diminuir.addEventListener("click", () => {
    n --
    numero.textContent = n
})