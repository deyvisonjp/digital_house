let num = [2, 4, 6];

//Função comum para calcular o dobro
// function calcDobro(n) {
//     let dobro = [];
//     for (let i = 0; i < n.length; i++) {
//         dobro[i] = n[i] * 2;
//     }
//     return dobro;
// }

// console.log(calcDobro(num));
//Todo código acima com o metodo map
let numeros = [2,4,6];
let dobroNumeros = numeros.map(function(num){
    return num * 2;
});

console.log(dobroNumeros);