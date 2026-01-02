function buscarUsuario() {
    return new Promise (resolve => {
        setTimeout(() => resolve("Usuário encontrado com sucesso!"), 2000)
    })
}

async function executar() {
    console.log("Buscando usuário...")
    const resultado = await buscarUsuario()
    console.log(resultado)   
}

executar()