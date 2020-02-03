// spread =====================================================
let notas = [9.5, 3.4, 5.5, 7];
console.log(Math.max([9.7], ...notas));

// rest (spread com funções))
const somar = (...numeros) => {
    return numeros.reduce((pilha, num) => pilha += num);
}

console.log(somar(1,2,1));
console.log(somar(4, 5));

//2º Exemplo - Permite usar a qtd de parametros que quisermos
function letras(...paramns){
    console.log(paramns);
}

letras("a", "b");