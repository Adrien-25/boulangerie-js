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
            var TotalProduit = this.fabricationsChiffres[0] * this.fabricationsChiffres[2];
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