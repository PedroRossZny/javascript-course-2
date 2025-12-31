export default function listarProdutos(produtos, precos, usuario) {
    if (usuario == false) {
        console.log("Usuário ainda não cadastrado!")
    } else {
        console.log("PRODUTOS:")
        for (let p = 1; p <= 5; p++) {
            console.log(`[${p}]: ${produtos[p]} - R$${precos[produtos[p]]}`)
        }
    }
}
