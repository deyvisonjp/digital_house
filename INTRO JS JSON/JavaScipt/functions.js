//Função Padrão
function exemplo() {
    return ("Olá, sou uma função");
}

console.log(exemplo());

//Função expressa
let exemplo2 = function () {
    return "Oi eu sou uma função expressa";
}

console.log(exemplo2());

//Diferença função comum para expressa:
// Função comum > São carregadas antes que aqualquer código seja executado;
// Função expressa > Só é interpretada quando a linha do código com a função é atingida;

function saudar(nome, sobrenome) {
    return 'olá, ' + nome + ' ' + sobrenome + '!';
}

console.log(saudar("João", "Paula"));

//Função é Par
function ePar(numero) {
    let par;
    numero % 2 == 0 ? par = true : par = false;
    return par;
}

console.log(ePar(10));

// variáveis ​​(estruturas que contêm informações),
// funções (estruturas que processam informações).

const anterior = function(numero){
    return numero-1;
}

const triplo = function(numero){
    return numero * 3;
}

const anteriorDoTriplo = function(numero){
    return anterior(triplo(numero));
}

console.log(anteriorDoTriplo(3));