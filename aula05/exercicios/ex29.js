function buscarDados() {
    return new Promise (resolve => {
        setTimeout(() => resolve("Dados recebidos!"), 2000);
    });
}

async function executar() {
    console.log("Buscando...");
    const resultado = await buscarDados();
    console.log(resultado);
}

executar();