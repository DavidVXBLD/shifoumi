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

// Phase de délibération

// Si le joueur choisi "Pierre"
if (choix === "Pierre") {
    if(choixOrdinateur === "Feuille") {
        alert("La feuille enveloppe la pierre! J'ai gagné!")
    }
    else if(choixOrdinateur === "Ciseaux") {
        alert("La pierre écrase les ciseaux! " + saisie + ", tu as gagné!")
    }
    else {
        alert("Nous avons tous deux choisi la pierre! C'est une égalité!")
    }
}

// Si le joueur choisi "Feuille"
if (choix === "Feuille") {
    if(choixOrdinateur === "Pierre") {
        alert("La feuille enveloppe la pierre! " + saisie + ", tu as gagné!")
    }
    else if(choixOrdinateur === "Ciseaux") {
        alert("Les ciseaux découpent la feuille! J'ai gagné!")
    }
    else {
        alert("Nous avons tous deux choisi la feuille! C'est une égalité!")
    }
}

// Si le joueur choisi "Ciseaux"
if (choix === "Ciseaux") {
    if(choixOrdinateur === "Pierre") {
        alert("La pierre écrase les ciseaux! J'ai gagné!")
    }
    else if(choixOrdinateur === "Feuille") {
        alert("Les ciseaux découpent la feuille! " + saisie + ",tu as gagné!")
    }
    else {
        alert("Nous avons tous deux choisi les ciseaux! C'est une égalité!")
    }
}

       