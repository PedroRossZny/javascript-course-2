const doce = document.getElementById("doce")
const botao = document.getElementById("botao")
const lista = document.getElementById("lista")

botao.addEventListener("click", () => {
    const novoDoce = document.createElement("li")
    novoDoce.textContent = doce.value
    lista.appendChild(novoDoce)
    /*
    if (doce.value.trim() !== "") {
        const novoDoce = document.createElement("li")
        novoDoce.textContent = doce.value
        lista.appendChild(novoDoce)
        doce.value = ""
    }
    */
})
