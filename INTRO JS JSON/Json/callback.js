// const somar = (numeroA, numeroB) => numeroA + numeroB;
// const calculadora = (numA, numB, fazer) => fazer(numA, numB);
// console.log(calculadora(5,4, somar));

//
function dobro(numero){
    return numero*2;
}
function triplo(numero){
    return numero*3;
}

function aplicar(n, funcao){
    return funcao(n);
}

console.log(aplicar(5, triplo));

//CALCULADORA
const somar = (a,b) => a + b;
const subtrair = (a,b) => a-b;
const multiplicar = (a,b) => a*b;
const dividir = (a,b) => a/b;

function calculadora(a,b, callback){
    return callback(a,b);
}

console.log(calculadora(20,4,dividir));

function adicionarHttp(url) {
    return "http://" + url;
}

function processar(sites, adicionar){
    let lista = [];
    for(let i = 0; i < sites.length; i++) {
        lista[i] = adicionar(sites[i]);
    }
    return lista;
}

console.log(processar(["uol.com", "baixaki.com"], adicionarHttp));