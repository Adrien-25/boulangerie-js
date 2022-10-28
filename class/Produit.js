class Produit {
    nom
    coutFabrication
    prixVente;
    constructor(nom, coutFabrication, prixVente) {
        this.nom = nom;
        console.log(`${this.nom} est un produit (${this.coutFabrication}/${this.prixVente})`);
    }
    
}