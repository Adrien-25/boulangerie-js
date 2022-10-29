class Patisserie extends Produit {
    auBeurre;
    constructor(nom,coutFabrication,prixVente, auBeurre = false) {
        super(nom,coutFabrication,prixVente);
        this.auBeurre = auBeurre;
        console.log(`${this.nom} est un produit (${this.coutFabrication}/${this.prixVente})`);
        console.log(`${this.nom} est précisément une pâtisserie ${this.auBeurre ? "au beurre" : ''}`);
    }
}