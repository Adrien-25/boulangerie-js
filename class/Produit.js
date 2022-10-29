class Produit {
    nom
    coutFabrication
    prixVente;
    constructor(nom, coutFabrication, prixVente) {
        this.nom = nom;
        this.coutFabrication = coutFabrication;
        this.prixVente = prixVente;
        console.log(`${this.nom} est un produit (${this.coutFabrication}/${this.prixVente})`);
    }
    
}