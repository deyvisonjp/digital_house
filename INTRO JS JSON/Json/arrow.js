let saudar = () => "Olá Mundo!";

let dobroDe = numero => numero * 2;

let somar = (a,b) => a + b;

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ":" + data.getMinutes();
}

console.log(horaAtual());