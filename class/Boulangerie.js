class Boulangerie {
    nom;
    constructor(nom) {
        this.nom = nom;
        this.embauchePrenom = ['bernard','paul','virginie','violaine'];
        //this.bilan = [];
        // var listePrenom = [bernard,paul,virginie,violaine];
        console.log(`${this.nom} est une boulangerie`);
    }
    embaucher(prenom) {
        console.log(`La Grande Boulangerie embauche ${prenom.prenom}`);
    }
    bilan(){
        console.log(`BILAN`);
        bernard.bilan();
        var bernardBilan = bernard.bilan();

        paul.bilan();
        var paulBilan = paul.bilan();

        virginie.bilan() ;
        var virginieBilan = virginie.bilan();

        violaine.bilan();
        var violaineBilan = violaine.bilan();

        var FabricationsTotaux = bernardBilan+paulBilan;
        var VentesTotaux = virginieBilan+violaineBilan;
        var RésultatTotaux = FabricationsTotaux+VentesTotaux;


        console.log('Totaux');
        // console.log(`Fabrications = ${bernard.bilan()} + ${paul.bilan()}`);
        console.log(`  Fabrications =`,FabricationsTotaux);
        console.log(`  Ventes =`,VentesTotaux);
        console.log(`  Résultat =`,RésultatTotaux);


    }
}
// ${virginie.bilan()}
// ${violaine.bilan()}