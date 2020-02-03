let estoque = [
    {
        tipo: "moleton",
        cod: "001",
        tamanho: "P",
        quantidade: 5,
        valor: 15.0
    },
    {
        tipo: "camiseta",
        cod: "002",
        tamanho: "M",
        quantidade: 10,
        valor: 25.0
    }
];

const retiraEstoque = (cod, qtd) => {
    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].cod === cod) {
            estoque[i].quantidade = estoque[i].quantidade - qtd;
        } else {
            return "Esse código não existe";
        }
    }
}

// console.log(retiraEstoque("01", 2));

const somaEstoqueItem = () => {
    let lista = [];
    for (let i = 0; i < estoque.length; i++) {
        lista[i] = "Valor em estoque do produto [" + estoque[i].cod + "] = R$ " + estoque[i].quantidade * estoque[i].valor; 
    }
    return lista;
}

// console.log(somaEstoqueItem());


