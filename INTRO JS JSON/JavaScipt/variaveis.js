//VARIAVEIS COMUNS
console.log("Variavel utilizando VAR ----------------------------------------------")
var nomeDeUsuario = "Deyvison";
console.log(nomeDeUsuario);


//VARIAVEIS UTILIZANDO LET 
//=================================================================================
console.log("Variavel utilizando LET ----------------------------------------------")
let nomeComLet = "Deyvison J";
// let nomeComLet = "Junior"; -> Assim daria erro
nomeComLet =  "Joao Ferreira"
console.log(nomeComLet);

if(true){
    nomeComLet = "Joao Dória";
    console.log(nomeComLet);
    //a variavel reservada let, limita-se aos blocos.
}

//Variaveis const -> Não é possivel alterar, valor é atribuido uma unica vez
// Lembre-se de que é uma boa prática nomear as constantes com letras maiúsculas.
//=================================================================================
console.log("Variavel utilizando CONST ----------------------------------------------")
const carro = "Civic";
carro = "Gol";
// carro = "Gol" -> erro, pois a const não pode ser modificada, o valor é fixo;
console.log(carro);