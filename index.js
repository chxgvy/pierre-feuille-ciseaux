var bouttonPierre = document.querySelector('#pierre');
var bouttonFeuille = document.querySelector('#feuille'); // definit les boutons
var bouttonCiseaux = document.querySelector('#ciseaux');
var boutonReset = document.querySelector('#reset');

var score_utilisateur = document.querySelector('.Jscore');
var score_robot= document.querySelector('.Oscore')

var joueur = 0 ;
var ordinateur = 0 ;  // variable qui vont stocker le choix du joueur
var resultat = 0 ;

var score_joueur = 0
var score_ordinateur = 0

var choix_ordinateur = ['pierre', 'feuille', 'ciseaux'] // tableau qui va de 0 à 2 et qui va choisir quel coup jouer 



bouttonPierre.addEventListener('click', function(){ // créer une fonction "click"
    joueur = 'pierre' // le joueur choisi pierre
    nombre = Math.floor(Math.random() *3) // genere un chiffre aléatoire dans le tableau
    ordinateur = choix_ordinateur[nombre];
    duel(joueur, ordinateur); // le duel commence
})

bouttonFeuille.addEventListener('click', function(){ // créer une fonction "click"
    joueur = 'feuille' // le joueur choisi feuille 
    nombre = Math.floor(Math.random() *3) // genere un chiffre aléatoire dans le tableau 
    ordinateur = choix_ordinateur[nombre];
    duel(joueur, ordinateur); // le duel commence 
})

bouttonCiseaux.addEventListener('click', function(){ // créer une fonction "click"
    joueur = 'ciseaux' // le joueur choisi ciseaux
    nombre = Math.floor(Math.random() *3) // genere un chiffre aléatoire dans le tableau 
    ordinateur = choix_ordinateur[nombre];
    duel(joueur, ordinateur); // le duel commence
})
boutonReset.addEventListener('click', function(){
    score_joueur = 0
    score_ordinateur = 0
})


function duel(joueur, ordinateur){ // fonction duel entre le joueur et l'ordinateur 
    if (joueur === 'pierre' && ordinateur === 'ciseaux' || joueur === 'feuille' && ordinateur === 'pierre' || joueur === 'ciseaux' && ordinateur === 'feuille'){
        resultat = 'Gagné'; // alors c'est gagné
        score_joueur = score_joueur+1
        score_utilisateur.textContent = score_joueur
        affichage.innerHTML = joueur + " vs " + ordinateur + " : " + resultat; // affichage du resultat texte sur la page HTML
        
    }if(joueur === 'pierre' && ordinateur === 'feuille' || joueur === 'feuille' && ordinateur === 'ciseaux' || joueur === 'ciseaux' && ordinateur === 'pierre'){
        resultat = 'Perdu'; // alors c'est perdu
        score_ordinateur = score_ordinateur+1
        score_robot.textContent = score_ordinateur
        affichage.innerHTML = joueur + " vs " + ordinateur + " : " + resultat; // affichage du resultat texte sur la page HTML

    }if(joueur === 'pierre' && ordinateur === 'pierre' || joueur === 'feuille' && ordinateur ==='feuille' || joueur === 'ciseaux' && ordinateur === 'ciseaux'){
        resultat = 'Egalité'; // alors c'est une égalité
        affichage.innerHTML = joueur + " vs " + ordinateur + " : " + resultat; // affichage du resultat texte sur la page HTML
    }
}