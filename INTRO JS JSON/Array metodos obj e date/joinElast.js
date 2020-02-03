let produto = [
    nome= "Camisa",
    tamanho= "M"
]

console.log(produto);

//indexOf -> Pesquisar algo no vetor
console.log(produto.indexOf("Camisa")); //Se não enconstrasse retornaria -1

//lastIndexOf -> Pesquisar a ultima ocorrencia no vetor
produto.push("Camisa", "P");
console.log(produto.lastIndexOf("Camisa")); //Ultima ocorrencia
console.log(produto.indexOf("Camisa")); //Primeira ocorrencia

//join - Transforma o vetor em string
console.log(produto.join(" - "));
console.log(produto.join("/"));
