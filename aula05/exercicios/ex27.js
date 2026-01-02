function buscarDados(callback) {
    setTimeout(() => {
        callback("Dados recebidos!");
    }, 2000); // simula demora de 2 segundos
}

buscarDados((resultado) => {
    console.log(resultado);
});