export default function listarProdutos(produtos, precos) {
    console.log("PRODUTOS DISPONÍVEIS:");
    for (const id in produtos) {
        console.log(`[${id}] ${produtos[id]} - R$${precos[produtos[id]].toFixed(2)}`);
    }
}
