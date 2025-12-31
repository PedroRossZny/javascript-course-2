import cadastrarUsuario from "./usuarios.js";
import listarProdutos from "./produtos.js";
import adicionar from "./carrinho.js";

const produtos = {
    1: "Camiseta Preta",
    2: "Regata Preta",
    3: "Oversized Preta",
    4: "Manga Longa Preta",
    5: "Moletom Preto",
};

const precos = {
    "Camiseta Preta": 80,
    "Regata Preta": 60,
    "Oversized Preta": 120,
    "Manga Longa Preta": 100,
    "Moletom Preto": 200,
};

// fluxo da loja
cadastrarUsuario("Pedro");
listarProdutos(produtos, precos);

// simulando compra
const compras = [1, 2]; // IDs dos produtos escolhidos
console.log("\nComprando uma Camiseta Preta e uma Regata Preta...");
adicionar(compras, produtos, precos);
