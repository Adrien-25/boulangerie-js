class Boulangerie {
    nom;
    constructor(nom) {
        this.nom = nom;
        this.embauchePrenom = [];
        console.log(`${this.nom} est une boulangerie`);
    }
    embaucher(prenom) {
        console.log(`La Grande Boulangerie embauche ${prenom.prenom}`);
    }
}