class Timer {
    constructor() {
        this.segundos = 0;
    }
    // Cuidado: arrow herda `this` do contexto de definição
    iniciar() {
        setInterval(() => {
            this.segundos++;
            console.log(this.segundos);
        }, 1000);
    }
}

const t = new Timer();
t.iniciar();