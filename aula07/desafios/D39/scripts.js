const texto = document.getElementById("texto")
const paragrafo = document.getElementById("paragrafo")

texto.addEventListener("input", () => {
    paragrafo.textContent = texto.value
})