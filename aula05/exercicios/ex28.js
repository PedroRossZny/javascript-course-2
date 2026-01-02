function buscarDados() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Dados recebidos!");
        }, 2000);
    });
}

buscarDados()
    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro));