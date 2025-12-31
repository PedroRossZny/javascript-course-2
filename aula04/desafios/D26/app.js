import {adicionar, retirar} from "./functions/carrinho.js"
import listarProdutos from "./functions/produtos.js"
import cadastrarUsuario from "./functions/usuarios.js"

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

let carrinho = []
let total = 0
let usuario = false

listarProdutos(produtos, precos, usuario)
cadastrarUsuario("Pedro")
usuario = true
listarProdutos(produtos, precos, usuario)
adicionar(1)