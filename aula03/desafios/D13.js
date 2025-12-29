const livro = {
    titulo: "JavaScript: The Good Parts",
    autor: "Douglas Crockford",
    info() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}`)
    }
}

livro.info()
// Título: JavaScript: The Good Parts, Autor: Douglas Crockford