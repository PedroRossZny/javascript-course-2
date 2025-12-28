class Animal {
    falar() {
        console.log("O animal está fazendo um som");
    }
}

class Cachorro extends Animal {
    falar() {
        console.log("O cachorro late");
    }
}

class Gato extends Animal {
    falar() {
        console.log("O gato mia");
    }
}

const animais = [new Cachorro(), new Gato()];
animais.forEach(animal => animal.falar());
// O cachorro late
// O gato mia