export default function adicionar(compras, total=0) {
    for (let p = 1; p <= 2; p++) {
        total += compras[p]
    }
    console.log(`Total: R$ ${total.toFixed(2)}`)
}