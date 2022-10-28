class Boulangerie {
    nom
    // embauchePrenom;
    constructor(nom) {
        this.nom = nom;
        // this.embauchePrenom = [];
        console.log(`${this.nom} est une boulangerie`);
    }
    embaucher( prenom) {
        // this.embauchePrenom.push(new this.embauchePrenom(prenom));
        console.log(`La Grande Boulangerie embauche ${prenom}`);
    }
}