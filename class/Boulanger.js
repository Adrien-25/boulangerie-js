class Boulanger {
    prenom;
    constructor(prenom) {
        this.prenom = prenom;
        this.fabrications = [];
        this.fabricationsChiffres = [];
        console.log(`${this.prenom} est un boulanger`);
    }
    fabriquer( produit, quantite) {
        this.fabrications.push(quantite + '&' + produit.nom + '&' + produit.coutFabrication + '&' + produit.prixVente);

        //quantite + ' ' + produit.nom + ' ' + produit.coutFabrication + ' ' + produit.prixVente;

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

            var fabricationsChiffres2 = this.fabricationsChiffres[2];
            //console.log(fabricationsChiffres2);
            fabricationsChiffres2 = parseFloat(fabricationsChiffres2).toFixed(2);
            //console.log(fabricationsChiffres2);


            console.log(`  ${this.fabricationsChiffres[0]} ${this.fabricationsChiffres[1]} x ${fabricationsChiffres2} = ${TotalProduit.toFixed(2)}`);
            Total = Total + TotalProduit;
        }
        console.log (`  Total = ${Total.toFixed(2)}`);
        return Total;

    }
}