export default function listarProdutos(produtos, precos) {
    console.log("PRODUTOS:")
    for (let p = 1; p <= 5; p++) {
        console.log(`[${p}]: ${produtos[p]} - R$${precos[produtos[p]]}`)
    }
}
