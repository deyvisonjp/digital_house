let frutas = ["maçã","banana", "uva"];
let frutasDois = ["laranja", "abacate", "goiaba"];

//Para que as duas arrays se tornem uma -> ...
let listaCompleta = [...frutas, ...frutasDois];

console.log(listaCompleta);

let pessoa = {
    nome: "Vinicius",
    idade: 22
}

let infoPessoa = {
    tel: "123456789",
    rg: 1235486546,
    ...pessoa
}

let pessoaCompleta = {
    endereco: "Rua dos bobos",
    ...infoPessoa
}

console.log(pessoaCompleta);