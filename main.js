// Bloco de países
class UniaoEuropeia {
    constructor(pais) {
        this.pais = pais;
    }


    // Método comum a todos os países
    localizacao() {
        console.log(`${this.pais} fica no continente europeu.`);
    }
}


// Subclasse Portugal
class Portugal extends UniaoEuropeia {
    constructor(pais) {
        super(pais);
    }


    // Método específico para Portugal
    capital() {
        console.log(`Lisboa é a capital de ${this.pais}.`);
    }
}


// Subclasse Espanha
class Espanha extends UniaoEuropeia {
    constructor(pais) {
        super(pais);
    }


    // Método específico para Espanha
    capital() {
        console.log(`Madrid é a capital da ${this.pais}.`);
    }
}


// Exemplo de uso:
const portugal = new Portugal('Portugal');
const espanha = new Espanha('Espanha');


portugal.localizacao(); // Saída: Portugal fica no continente europeu.
portugal.capital();     // Saída: Lisboa é a capital de Portugal.


espanha.localizacao(); // Saída: Espanha fica no continente europeu.
espanha.capital();      // Saída: Madrid é a capital da Espanha.

console.log(portugal);
console.log(espanha);