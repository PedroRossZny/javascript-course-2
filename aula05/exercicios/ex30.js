function buscarProdutos() {
    return new Promise (resolve => {
        setTimeout(() => resolve (["Camiseta", "Moletom", "Tênis"]), 1500);
    });
}

async function mostrarProdutos() {
    console.log("Carregando produtos...");
    const produtos = await buscarProdutos();
    console.log("Produtos disponíveis:", produtos);
}

mostrarProdutos();