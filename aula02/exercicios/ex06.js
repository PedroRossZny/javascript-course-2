function processarUsuario(nome, callback) {
    console.log(`Processando usuário: ${nome}`)
    callback() 
}

processarUsuario("Pedro", () => {
    console.log("Usuário processado com sucesso!")
})