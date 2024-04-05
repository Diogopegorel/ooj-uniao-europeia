function Populacao(quantidade) {
    this.quantidade = quantidade;
}


function Capital(quantidade, cidade) {
    this.cidade = cidade;

    Populacao.call(this, quantidade);
}

function UniaoEuropeia(quantidade, cidade, pais) {
    this.pais = pais;

    Capital.call(this, quantidade, cidade);
}

const alemanha = new UniaoEuropeia(83800000, 'Berlim', 'Alemanha');

console.log(alemanha);