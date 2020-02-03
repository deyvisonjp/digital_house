const saudacaoPersonalizada = (nome) => {
    let saudacao = "Olá";
    function saudar(){
    return saudacao + " " + nome;
    }
    return saudar()
}

console.log(saudacaoPersonalizada("Deyvison"));