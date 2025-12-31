export default function adicionar(compras, produtos, precos) {
    let total = 0;
    console.log("Itens adicionados ao carrinho:");
    for (const id of compras) {
        const produto = produtos[id];
        const preco = precos[produto];
        console.log(`- ${produto}: R$${preco.toFixed(2)}`);
        total += preco;
    }
    console.log(`Total da compra: R$${total.toFixed(2)}`);
}
