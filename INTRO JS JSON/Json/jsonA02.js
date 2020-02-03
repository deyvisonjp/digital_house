// var frase = 'Breaking Bad Rules!';

// frase.slice(9,12); // retorna 'Bad'
// frase.slice(13); // retorna 'Rules!'
// console.log(frase.slice(-10));

//ATIV 1
let site = "br.digitalhouse.com";
function dominio(site) {
    let dom = "http://";
    return (dom + site.slice(0));
}

console.log(dominio(site));

//ATIV 2 - CONTANDO CARACTERES
let texto = "Estudando JSON";
console.log(texto.length);

//SUBSTITUIÇÂO
function substituicaoRapida(texto, procurar, substituir){
    let textoNovo = texto.replace(procurar, substituir);
    return textoNovo;
}

//ENCONTRA TEXTO
function menciona(texto, palavra) {
    if (texto.indexOf(palavra) != -1) {
        return true;
    } else { 
        return false; 
    }
}

console.log(menciona("Hoje vai chover", "vamos"));

//PEGAR PALAVRA
let textoteste = "Olá, sou Carlos!";
let nomeUsuario = textoteste.slice(9,15);
console.log(nomeUsuario);
