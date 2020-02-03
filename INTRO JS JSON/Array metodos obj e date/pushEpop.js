let pessoa = ["Deyvison"];
console.log("Inicialmente a Arryar começa com -> [" + pessoa + "]");

//push -> add um novo valor no final da array
pessoa.push(31, "M");
console.log(pessoa);

//pop -> exclui o ultimo valor da array
// pessoa.pop("M"); pode-se tambem armazenar o item excluido
let excluido = pessoa.pop();
console.log(pessoa);
console.log(excluido);

//unshit -> add no inicio da array
pessoa.unshift("Masculino");
console.log(pessoa);

//shift -> Exclui o primeiro item do array
let exc = pessoa.shift("Masculino");
console.log("Item excluido = " + exc);
console.log(pessoa);

//Remover
// let estudantes = [
//     {
//       nome: "Álvaro",
//       media: 9,
//       curso: "Android"
//     },
//     {
//       nome: "Daniel",
//       media: 6,
//       curso: "Full Stack"
//     },
//     {
//       nome: "Alexis",
//       media: 3,
//       curso: "iOS"
//     }
//   ];

//   let alunoFormado = estudantes.pop("Alexis");
//   console.log(alunoFormado);

console.log("-".repeat(90));

let estudantes = [
    {
        nome: 'Álvaro',
        media: 9,
        curso: 'Android',
    },
    {
        nome: 'Daniel',
        media: 6,
        curso: 'Full Stack',
    }
];

// let objUm = { nome: "João", media: 5, curso: "iOS" };
// let objDois = { nome: "Miguel", media: 2, curso: "Android" };
estudantes.push({ nome: "João", media: 5, curso: "iOS" }, { nome: "Miguel", media: 2, curso: "Android" });
estudantes.unshift({ nome: "Mariana", media: 9, curso: "Full Stack" });
estudantes.unshift({ nome: "Francisco", media: 2, curso: "Android" });
console.log(estudantes);
let alunoDesistente = estudantes.shift("Álvaro");
console.log(alunoDesistente);

console.log(estudantes[2].media);


