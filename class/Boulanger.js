class Boulanger {
    prenom
    ;
    constructor(prenom) {
        this.prenom = prenom;
        this.fabrications = [];
        this.fabricationsChiffres = [];

        console.log(`${this.prenom} est un boulanger`);
    }
    fabriquer( produit, quantite) {
        this.fabrications.push(quantite + '&' + produit.nom + '&' + produit.coutFabrication + '&' + produit.prixVente);

        quantite + ' ' + produit.nom + ' ' + produit.coutFabrication + ' ' + produit.prixVente;

        console.log(`${this.prenom} fabrique ${quantite} ${produit.nom}`);
    }
    bilan() {
        var Total = 0
        console.log(`Fabrications de ${this.prenom} :`);

        for (let fabrication of this.fabrications) {
            //console.log(fabrication);
            this.fabricationsChiffres = fabrication.split('&');
            //console.log(this.fabricationsChiffres);
            var TotalProduit = this.fabricationsChiffres[0] * this.fabricationsChiffres[2]
            console.log(`${this.fabricationsChiffres[0]} ${this.fabricationsChiffres[1]} x ${this.fabricationsChiffres[2]} = ${TotalProduit}`);
            Total = Total + TotalProduit;
        }
        console.log (`Total = ${Total}`);

    }
}