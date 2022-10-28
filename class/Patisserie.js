class Patisserie extends Produit {
    auBeurre;
    constructor(nom, auBeurre = false) {
        super(nom);
        this.auBeurre = auBeurre;
        console.log(`${this.nom} est précisément une pâtisserie ${this.auBeurre ? "au beurre" : ''}`);
    }
}