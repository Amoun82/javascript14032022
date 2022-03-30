console.log("les objets\n\n") ;

/* objet */
let animalLoup = {
    nom : "loup",
    taille : 90,
    couleur : ["gris","noir","blanc"],
    poids : 50,
    vieForet : true,
    carnivore : true,
    nourriture : ["cerf","lapin","chevre","homme"]
};

let animalChien = {
    nom : "chien",
    taille : 50,
    couleur : "un peut de tout",
    poids : 40,
    vieForet : false,
    carnivore : true,
    nourriture : ["croquette","burger","pizza","poule"]
};


console.log(animalChien,animalLoup) ;

/*on va créer deux objets animal, le nom, sa taille , sa couleur, le poids, est-ce qu'il vit dans la foret, est-ce qu'il est carnivor, une liste : de 4 aliments qu'il peut manger

si le premier animal est plus gros que le deuxième animal, alors on fait maigrir le premier de 10, sinon si le deuxieme est plus gros que le premier alors on fait maigrir le deuxieme 
15 sinon on fait maigrir tous les deux de 5; à chaque qu'on fait magrir un ou les deux animaux on affiche le poids dans la console

console.log(`- poids du premier animal : ${animalLoup.poids}\n- poids du second animal : ${animalChien.poids}`) ;
*/

console.log("\n\nles conditions\n\n") ;

/* les conditions */
if(animalLoup.poids > animalChien.poids){
    animalLoup.poids -= 10 ;
    console.log(`poids du premier animal : ${animalLoup.poids}`) ;
}else if(animalLoup.poids < animalChien.poids){
    animalChien.poids -= 15 ;
    console.log(`poids du seconde animal : ${animalChien.poids}`) ;
}else{
    animalChien.poids -= 5 ;
    animalLoup.poids -= 5 ;
    console.log(`- poids du premier animal : ${animalLoup.poids}\n- poids du second animal : ${animalChien.poids}`) ;
}


let a = 10 ;

let b = 20 ;

let c = 30 ;

if (a < b && c > b)
    console.log("salim") ;
else
    console.log("pas salim") ;



let x = 100 ;

let y = 200 ;

let z = 300 ;

if(x < y && z < y)
    console.log("bonjour") ;
else
    console.log("au revoir") ;


/* Si le preimier téléphone à un nombre de giga différents du deuxième et que ils font tous les deux 5G ou que les Applications
sont identiques pour les deux téléphone 

Alors on ajoute une propriété gagnant avec un booléén en valeur pour le premier téléphone

sinon si le deuxieme téléphone à un prix différents du premier téléphone ou que la capacité en giga du deuxième et supérieure
ou égale à celle du premier 

alors on ajoute la valeur boolééne true à la propriété qu'on va créer qui aura pour nom SalimTuMebete 

sinon on affiche en console  (message en console) */

let telephone1 = {
    marque : "Samsung",
    modele : "SGF-70",
    prix : 200,
    capacite : 100,
    cinqG : true,
    appli : ["twitter","facebook","jeu","lampe"]
};

let telephone2 = {
    marque : "Sony",
    modele : "Ericson",
    prix : 80,
    capacite : 10,
    cinqG : false,
    appli : ["cuisine","jeu","lampe","verrou"]
};


if (telephone1.capacite !== telephone2.capacite && telephone1.cinqG === telephone2.cinqG || telephone1.appli === telephone2.appli){
    telephone1.gagant = true ;
    console.log("\npremier","\n",telephone1,"\n",telephone2,"\n\n") ;
}else if (telephone2.prix !== telephone1.prix || telephone1.capacite <= telephone2.capacite){
    telephone1.SalimTuMebete = true ;
    telephone2.SalimTuMebete = true ;
    console.log("\ndeuxieme","\n",telephone1,"\n",telephone2,"\n\n") ;
}else{
    console.log("\nmessage en console\n\n") ;
}



a = 5 ;

b = 10 ;

c = 15 ;

a > b ? (console.log("a > b")) : b < c ? ( console.log("b < c") ) : ( console.log("les autres cas !")) ;


/* 
On faire un objet immeuble avec un nombre d'étage, une adresse, savoir des appartements de dispo
 Dans cet objet immeuble on va décrire un appartement, cet appartement aura un nombre de pièce,
Une superficie, une liste des piècese (4 pièces), si c'est un duplex (pour l'appartement)

et après on va utiliser l'instruction switch pour comparer le nombre de pièces  et afficher en 
console à quel type  de profil cet appartement corresponds le nombre de pièces maximum pour 
l'appartement est de 5 pièces
*/

console.log('\n\n le swtich \n\n')

/* le switch */
let immeuble = {
    nbreEtage : 5 ,
    adresse : "rue du jean moulin" ,
    appartDispo : true ,
    appart : {
        nbrePiece : 4,
        superficie : 1522,
        pieces : ["chambre","salon","salle de bain","cuisine"],
        duplex : true 
    }
};

console.log(immeuble) ;


switch (immeuble.appart.nbrePiece){

    case 1 :
        console.log("tres petit appart") ;
    break ;

    case 2 :
        console.log("petit appart") ;
    break ;

    case 3 :
        console.log("appart moyen") ;
    break ;

    case 4 :
        console.log("appart grand") ;
    break ;

    case 5 :
        console.log("appart tres grand") ;
    break ;

    default :
        console.log("aucun profil pour cette appart")
};


switch (immeuble.appart.pieces[0]){

    case ("chambre") :
        console.log("on est dans la chambre pour dormir") ;
    break ;

    case ("salon") :
        console.log("on y regarde la télé") ;
    break ;

    case ("salle de bain") :
        console.log("on s'en sert pour le soin du corps") ;
    break ;

    case ("cuisine") :
        console.log("la bouffe la bouffe") ;
    break ;

    default :
        console.log("la tu t'es gouré d'appart mec") ;
};



/*
On va créer un tableau avec une liste de 10 prenoms que vous préférez et après on va comparer grâce 
au switch un des prénoms et avec 5 cas possible, pour chaque cas on va afficher le prénom en console
*/

let listePrenom = ["stef","salim","eric","marie","antoine","romane","guillaume","angelique","sebastion","sylvain"] ;


switch (listePrenom[0]){

    case 'stef' :
        console.log(`le prenom est ${listePrenom[0]}`) ;
    break ;

    case 'salim' :
        console.log(`le prenom est ${listePrenom[1]}`) ;
    break ;

    case 'marie' :
        console.log(`le prenom est ${listePrenom[3]}`) ;
    break ;

    case 'angelique' :
        console.log(`le prenom est ${listePrenom[7]}`) ;
    break ;

    case 'romane' :
        console.log(`le prenom est ${listePrenom[5]}`) ;
    break ;

    default :
        console.log(`le prenom est dans la liste`) ;

};

let prenoms = ['Salim' , 'Stephane' , 'Antoine' , , 'jean' , 'Eric' , 'Marie' , 'Hanane' , 'Bouchra', 'Chayma', 'Lucas' , 'Fatima'] ;



if ( prenoms[3] === 'Salim' ){
    console.log( `le prenom est ${prenoms[0]}` ) ;
}else if ( prenoms[3] === 'Bouchra' ){
    console.log( `le prenom est ${prenoms[8]}` ) ;
}else if ( prenoms[3] === 'Hanane' ){
    console.log( `le prenom est ${prenoms[7]}` ) ;
}else if ( prenoms[3] === 'Eric' ){
    console.log( `le prenom est ${prenoms[5]}` ) ;
}else{
    console.log( `le prenom est dans la liste` ) ;
}

console.log('\n\nles ternaires\n\n') ;
/* les ternaires */
let maVariable = 'je sais pas' ;

maVariable === 'je sais pas' ? console.log( "c'est bon !!" ) : console.log( "c'est pas bon !!" ) ;

maVariable === 'je sais pas' ? ( maVariable = 50 , console.log( "c'est bon !!" ) ) : console.log( "c'est pas bon !!" ) ;


if( maVariable === 'je sais pas' ){
    maVariable = 50 ;
    console.log( "c'est bon !!" ) ;
}else{
    console.log( "c'est pas bon !!" ) ;
}


console.log('\n\nles boucles\n\n') ;


let tab = [ "lion" , "chat" , "chien" , "loup" , "elephant" , "singe" , "rat" , "baleine" , "fouine" ] ;

for(let i = 0 ; i < tab.length ; i++){

    document.write(`<br>l'index est du tableau est : ${i}<br>la valeur est ${tab[i]}<br>`) ;
    console.log(`\nl'index est du tableau est : ${i}\nla valeur est ${tab[i]}\n`) ;

}

console.log("\n") ;

let tableau = [ 1 , 2 , 3 ] ;

for(index in tableau){
    console.log(`valeur : ${index}`) ;
}

console.log("\n") ;

let tableauVille = ["laon","reims","paris","lyons","marseille","grenoble"] ;
index = 0 ;

switch (tableauVille[index]){
    case "laon" :
        console.log(`je suis a ${tableauVille[index]}`) ;
    break ;
    case "reims" :
        console.log(`je suis a ${tableauVille[index]}`) ;
    break ;
    case "paris" :
        console.log(`je suis a ${tableauVille[index]}`) ;
    break ;
    case "lyons" :
        console.log(`je suis a ${tableauVille[index]}`) ;
    break ;
    case "marseille" :
        console.log(`je suis a ${tableauVille[index]}`) ;
    break ;
    case "grenoble" :
        console.log(`je suis a ${tableauVille[index]}`) ;
    break ;

    default :
        console.log("\ntu es perdu lol !!!") ;
}


console.log('\n\nles objets complexes\n\n') ;


/* objet personnage */
class personnage{
    constructor(nom = "nom" , prenom = "prenom" , defense = null , attaque = null , vie = null){
        this.nom = nom ;
        this.prenom = prenom ;
        this.defense = defense ;
        this.attaque = attaque ;
        this.vie = vie ;


        this.testBase = () =>{
            if(( nom === "nom" || nom === "" ) && ( prenom === "prenom" || prenom === "" ) && defense === null && attaque === null && vie === null){
                console.log("attention a ce que tu fais") ;
            }
        };

        this.defendre = (forceAdversaire = 0, attaqueAdversaire = null) => {
            if(this.defense === false && attaqueAdversaire === true){
                this.vie -= forceAdversaire ;
                console.log(`le personnage ${this.nom} ${this.prenom} a perdu : ${forceAdversaire} points de vie\nil lui reste ${this.vie} points de vie`) ;
            }else if (this.defense === true && attaqueAdversaire === true){
                console.log(`le personnage ${this.nom} ${this.prenom} s'est defendu`) ;
            }else{
                console.log("probleme lors du combat") ;
            }
        };

        this.testBase() ;

    }
};

let personnage1 = new personnage("Dracula","Alucard",false,false,50) ;

let personnage2 = new personnage ;

console.log(personnage1) ;

personnage1.defendre(10,true) ;


personnage1.critique = 20 ;

console.log(personnage1) ;