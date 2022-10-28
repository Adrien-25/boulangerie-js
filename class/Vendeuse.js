class Vendeuse {
    prenom
    ventes;
    constructor(prenom) {
        this.prenom = prenom;
        this.ventes = [];
        console.log(`${this.prenom} est une vendeuse`);
    }
    vendre( produit, quantite) {
        this.ventes.push(new this.prenom(prenom));
        console.log(`${this.prenom} vend ${quantite} ${produit.nom}`);
    }
    bilan() {
        console.log(`Ventes de ${this.prenom} :`);
        for (let fabrication of this.fabrications) {
            console.log (`${fabrication.quantite} ${fabrication.produit.nom}`);
        }
    }
}