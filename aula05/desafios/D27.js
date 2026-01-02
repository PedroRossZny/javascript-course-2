function buscarUsuario(callback) {
    console.log("Buscando usuário...")
    setTimeout(() => {
        callback("Usuário encontrado com sucesso!")
    }, 2000)
}

buscarUsuario((resultado => {
    console.log(resultado)
}))