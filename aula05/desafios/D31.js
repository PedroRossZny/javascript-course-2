function buscarUsuario(nome) {
    return new Promise (resolve => {
        setTimeout(() => resolve(`Usuário ${nome} encontrado com sucesso!`), 1000)
    })
}

function buscarProdutos() {
    return new Promise (resolve => {
        setTimeout(() => resolve(["Camiseta", "Moletom", "Regata"]), 1000)
    })
}

async function mensagemBoasVindas() {
    try {
        const nome = "Pedro"
        console.log("Procurando  usuário...")
        const usuario = await buscarUsuario(nome)
        console.log(usuario)
        console.log(`Seja bem vindo ${nome}!`)

        console.log("Buscando produtos...")
        const produtos = await buscarProdutos()
        console.log(`Produtos disponiveis: ${produtos.join(", ")}`)
    } catch (erro) {
        console.error("Erro:", erro)
    }
}

mensagemBoasVindas()