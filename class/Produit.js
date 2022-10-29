class Produit {
    nom
    coutFabrication
    prixVente;
    constructor(nom, coutFabrication, prixVente) {
        this.nom = nom;
        this.coutFabrication = coutFabrication;
        this.prixVente = prixVente;
        if (this.nom != "charlotte"){   
            console.log(`${this.nom} est un produit (${this.coutFabrication.toFixed(2)}/${this.prixVente.toFixed(2)})`);
        }
    }
    
}