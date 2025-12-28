class Animal {
    falar() { /* pode ser vazio ou genérico */}
}

class Cachorro extends Animal {
    falar() {console.log("Late");}
}
class Gato extends Animal {
    falar() {console.log("Mia");}
}
class Passaro extends Animal {
    falar() {console.log("Pia");}
}

const animais = [new Cachorro(), new Gato(), new Passaro()];
animais.forEach(a => a.falar());
// Late
// Mia
// Pia