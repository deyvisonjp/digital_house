let texto = "Papagaio";
function papagaio(texto){
    for(let rep = 0; rep < 5; rep++ ){
        console.log(texto);
    }
}

papagaio(texto);


function naoPareDeContarImparesAte(numero){
    let numerosImpares = 0;
    for (let i = 0; i < numero; i++){
        if (i % 2 !=0 ){
           numerosImpares ++;
        }
    }
    return numerosImpares;
}

console.log(naoPareDeContarImparesAte(50));