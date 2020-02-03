/*for in -> iterar, percorrer OBJETOS
===================================================================== */
console.log("=".repeat(90));
let pessoa = {
    nome: "Guilherme",
    idade: 23
}

for (var dados in pessoa) {
    console.log(dados, pessoa[dados]);
    // console.log(dados); console.log(pessoa[dados])
}

/*for of -> iterar, percorrer ARRAYS e STRINGs
===================================================================== */
console.log("=".repeat(90));
let musicos = ["Vinicius", "Tom", "Roberto"];

for (let musico of musicos){
    console.log(musico);
}

console.log("=".repeat(90))
let frase = "Essa semana vou no colearning";

for (let palavra of frase){
    console.log(palavra);
}
