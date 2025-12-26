if (true) {
    var x = 10; // escopo global / função
    let y = 20; // escopo de bloco
    const z = 30; // escopo do bloco
}
console.log(x); // 10
// console.log(y); ❌ ERRO
// console.log(z); ❌ ERRO