class Vendeuse {
    prenom;
    constructor(prenom) {
        this.prenom = prenom;
        this.ventes = [];
        this.ventesChiffres = [];

        console.log(`${this.prenom} est une vendeuse`);
    }
    vendre( produit, quantite) {
        this.ventes.push(quantite + '&' + produit.nom + '&' + produit.prixVente);
        //this.ventes.push(new this.prenom(prenom));
        console.log(`${this.prenom} vend ${quantite} ${produit.nom}`);
    }
    bilan() {
        var Total = 0
        console.log(`Ventes de ${this.prenom} :`);
        for (let fabrication of this.ventes) {
            //console.log(fabrication);
            this.ventesChiffres = fabrication.split('&');
            //console.log(this.ventesChiffres);
            var TotalProduit = this.ventesChiffres[0] * this.ventesChiffres[2];

            var ventesChiffres2 = this.ventesChiffres[2];
            //console.log(fabricationsChiffres2);
            ventesChiffres2 = parseFloat(ventesChiffres2).toFixed(2);

            console.log(`  ${this.ventesChiffres[0]} ${this.ventesChiffres[1]} x ${ventesChiffres2} = ${TotalProduit.toFixed(2)}`);
            Total = Total + TotalProduit;
        }
        console.log (`  Total = ${Total.toFixed(2)}`);
        return Total;
    }
}