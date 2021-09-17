// Programme de Shifoumi

//Introduction: Accueil et saisie du nom
alert("Bonjour et bienvenu sur ce programme de Pierre-Feuille-Ciseaux.");
var saisie = prompt("Veuillez vous identifier avant de venir m'affronter.");
alert("Très bien" + " " + saisie + ", commençons!");

// Début du jeu: phase joueur
var choix = prompt("Alors? Pierre, Feuille ou Ciseaux?");
alert("Tu as opté pour " + choix + "? Très bien...")

// Phase ordinateur
var choixOrdinateur = Math.random();
        if (choixOrdinateur < 0.34) {
            choixOrdinateur = "Pierre";
        } else if(choixOrdinateur <= 0.67) {
            choixOrdinateur = "Feuille";
        } else {
            choixOrdinateur = "Ciseaux";
        }
alert("L'ordinateur a choisi" + " " + choixOrdinateur);


       