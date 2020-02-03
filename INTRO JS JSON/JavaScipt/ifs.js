let dado = true;

if (dado == true){
    console.log("É vedadeiro!")
} else {
    console.log("É falso");
}

let linguagem = "javascript";

if (linguagem === "javascript"){
    console.log("Estou aprendendo");
} else {
    console.log("Vou aprender mais pra frente")
}

let nome = "Gil";

function podePassar(nome){
    if (nome === "Natalia"){
        return false;
    } else {
        return true;
    }
}

console.log(podePassar(nome));