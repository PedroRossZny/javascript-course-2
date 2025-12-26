// teste var, let e const
if (true) {
    var varTest = "var funciona em escopo de função ou global"
    let letTest = "let funciona em escopo de bloco"
    const constTest = "const funciona em escopo de bloco"
    console.log(varTest)
    console.log(letTest)
    console.log(constTest)
}
console.log("---Fora do bloco---")
console.log(varTest) // funciona
/*
console.log(letTest) ❌ ERRO
console.log(constTest) ❌ ERRO
*/