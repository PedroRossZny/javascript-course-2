function calcularPrecoFinal(preco, desconto) {
    console.log("Validando desconto...")
    let precoDesconto = preco - ((desconto / 100) * preco)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (desconto < 50 && desconto >= 1) {
                resolve(`O produto de R$ ${preco.toFixed(2)} após um desconto de ${desconto}%: R$ ${precoDesconto.toFixed(2)}`)
            } else {
                reject("Desconto inválido. O desconto deve ser menos que 50%, ou, maior ou igual a 1%.")
            }
        }, 2000)
    })
}

calcularPrecoFinal(100, 10)
    .then(resultado => console.log(resultado))
    .catch(erro => console.log(erro))