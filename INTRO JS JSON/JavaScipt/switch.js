// If ternário
let idade = 15;

idade >= 18 ? console.log("Maior de idade!") : console.log("Menor de idade!");

//Switch

let fruta = "uva";

switch(fruta){
    case "maçã":
        console.log("Maça é top!");
        break;
    case "laranja":
        console.log("É saudavél!");
        break;
    default:
        console.log("Fruta desconhecida!");
}

// MAIS UMA SWITCH
let dia = "quarta-feira";

function fimDeSemana(dia){
	switch(dia){
		case "segunda-feira":
			console.log("você tem aulas!");
			break;
		case "quarta-feira":
			console.log("você tem aulas!");
			break;
		case  "sexta-feira":
		console.log("você tem aulas!");
		break;
		default:
		console.log("você não tem aulas");
	}
}

fimDeSemana(dia);