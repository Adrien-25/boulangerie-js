class Patissier extends Boulanger{
    constructor(prenom,Totalbilan) {
        super(prenom,Totalbilan);
        //super(Totalbilan);

        console.log(`${this.prenom} est aussi un patissier`);
    }
    fabriquer( produit, quantite) {
        this.fabrications.push(quantite + '&' + produit.nom + '&' + produit.coutFabrication + '&' + produit.prixVente);        
        console.log(`En ${produit instanceof Patisserie ? "pâtisserie" : "boulangerie"}, ${this.prenom} fabrique ${quantite} ${produit.nom}`);
    }
    bilan() {
        var Total = 0
        console.log(`Fabrications de ${this.prenom} :`);
        //console.log(this.fabrications);
        for (let fabrication of this.fabrications) {
            //console.log(fabrication);
            this.fabricationsChiffres = fabrication.split('&');
            //console.log(this.fabricationsChiffres);
            var TotalProduit = this.fabricationsChiffres[0] * this.fabricationsChiffres[2]
            console.log(`  ${this.fabricationsChiffres[0]} ${this.fabricationsChiffres[1]} x ${this.fabricationsChiffres[2]} = ${TotalProduit}`);
            Total = Total + TotalProduit;
        }
        console.log (`  Total = ${Total}`);
        return Total;
    }
}