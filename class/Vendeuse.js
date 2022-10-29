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
            var TotalProduit = this.ventesChiffres[0] * this.ventesChiffres[2]
            console.log(`  ${this.ventesChiffres[0]} ${this.ventesChiffres[1]} x ${this.ventesChiffres[2]} = ${TotalProduit}`);
            Total = Total + TotalProduit;
        }
        console.log (`  Total = ${Total}`);
        return Total;
    }
}