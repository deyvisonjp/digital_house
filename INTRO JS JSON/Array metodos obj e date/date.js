/*Antes de continuar, lembre-se de que um objeto é a representação de código de um elemento
da vida real. Agora, vamos com o objeto date.*/

// const data = new Date(); //Pega a data atual
const data = new Date(2020,01,25); //Cria uma data especifica
console.log(data);

console.log("semana: " + data.getDay()); //Semana -> inicia do zero
console.log("dia: " + data.getDate()); //Dia
console.log("mês: " + data.getMonth()); //Mês -> inicia do zero
console.log("ano: " + data.getFullYear()); //Mês -> inicia do zero

//-------------------------------
let dataCriada = new Date();
data.setYear(2020);
data.setMonth(1);
data.setDate(1);

console.log(dataCriada);
