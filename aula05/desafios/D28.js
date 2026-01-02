function buscarUsuario() {
    console.log("Buscando usuário...")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Usuário encontrado com sucesso!")
        }, 2000)
    })
}

buscarUsuario()
    .then(resultado => console.log(resultado))
    .catch(erro => console.log(erro))