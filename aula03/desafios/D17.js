class Animal {
    falar(){}
}

class Cachorro extends Animal {
    falar() {
        console.log("O cachorro late")
    }
}

class Gato extends Animal {
    falar() {
        console.log("O gato mia")
    }
}

class Passaro extends Animal {
    falar() {
        console.log("O pássaro canta")
    }
}

const animais = [new Cachorro(), new Gato(), new Passaro()]
animais.forEach(animal => animal.falar())
// O cachorro late
// O gato mia
// O pássaro canta