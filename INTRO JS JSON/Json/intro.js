let pessoa = {
    nome: "Deyvison",
    idade:31,
    altura: 1.70
}

//Covertendo o objeto para Json - (SE transforma em texto)
let json = JSON.stringify(pessoa);
console.log(json);
//Convertendo Json <> objeto
let objetoDeNovo = JSON.parse(json);
console.log(objetoDeNovo);

let compras = ["pao", "biscoito", "manteiga"];
let jsonCompras = JSON.stringify(compras);
console.log(jsonCompras);
console.log(jsonCompras[1]); //Se transforma em cadeia de caracteres

let arrayCompras = JSON.parse(jsonCompras);
console.log(arrayCompras[0]);