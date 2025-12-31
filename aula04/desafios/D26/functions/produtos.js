export default function listaProdutos() {
    const produtos = {
        1: "Camiseta Preta",
        2: "Regata Preta",
        3: "Oversized Preta",
        4: "Manga Longa Preta",
        5: "Moletom Preto",
    }

    const precos = {
        "Camiseta Preta": 80,
        "Regata Preta": 60,
        "Oversized Preta": 120,
        "Manga Longa Preta": 100,
        "Moletom Preto": 200
    }

    console.log("PRODUTOS:")
    for (let p = 1; p <= 5; p++) {
        console.log(`[${p}]: ${produtos[p]} - R$${precos[produtos[p]]}`)
    }
}
