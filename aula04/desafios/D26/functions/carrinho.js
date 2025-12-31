export function adicionar(produto) {
    carrinho.push(produtos[produto])
    total += precos[produtos[produto]]
    console.log(`${produtos[produto]} adcionado com sucesso!`)
}

export function retirar(produto) {
    if (carrinho[produto - 1] === produtos[produto]) {
        carrinho.splice(produto - 1, 1)
        total -= precos[produtos[produto]]
    } else {
        console.log('Esse produto não está no seu carrinho')
    }
}