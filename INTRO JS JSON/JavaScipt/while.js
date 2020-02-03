function count(inicio, fim) {
    while (inicio <= fim) {
        console.log("O número atual é " + inicio + " e é menor que " + fim);
        inicio++;
    }
}

count(1, 5);

// Queremos construir uma função que receba um array de números como parâmetro. A função deve passar por esse array e imprimir cada um dos números pelo console. Se você encontrar um 5, deverá parar a execução e imprimir com console o texto "Encontramos um 5!".

function encontreUm5(numeros) {
    let i = 0;
    do {
        console.log(numeros[i]);
        i++;
        if (numeros[i] == 5) {
            console.log("Encontramos um 5!");
        }
    } while (numeros[i] != 5);
}

encontreUm5([2, 4, 3, 8, 10, 25, 5]);

//
function tabelaDeMultiplicacao(numero) {
    let m = 1;
    while (m <= 10) {
        console.log(numero + " * " + m + " = " + (numero * m));
        m++;
    }
}
tabelaDeMultiplicacao(5);