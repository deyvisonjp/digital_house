// pilha -> ACUMULADOR -- numero -> ELEMENTO CORRENTE
let numeros = [5, 7, 16];
var soma = numeros.reduce(function(pilha, numero){
    return pilha + numero;
})

console.log(soma);