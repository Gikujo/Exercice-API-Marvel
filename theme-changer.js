/* -------------------------------------------------------------------------------------------------
-------------------------- GESTION DES DIFFÉRENTS THÈMES DE COULEUR --------------------------------
--------------------------------------------------------------------------------------------------*/

const bodyEl = document.querySelector('body');
let textColor = "white";
let backgroundColor = "black"



// ------------------------- COULEUR PAR DEFAUT : NOIR -------------------------------------
const textElements = document.getElementsByClassName('changing-color');
for (let index = 0; index < textElements.length; index++) {
    textElements[index].classList.add(`text-${textColor}`);
}

let themeIsBlack = true;
let themeIsGreen = false;
let themeIsRed = false;

// --------------------- CRÉATION DE LA FONCTION BLACK THEME -------------------------------
function blackTheme() {
    const textElements = document.getElementsByClassName('changing-color');
    textColor = "white";
    backgroundColor = "black";
    if (themeIsGreen) { // si le thème actuel est le vert, on enlève les attributs
        bodyEl.classList.remove('bg-success');
        for (let index = 0; index < textElements.length; index++) {
            textElements[index].classList.remove(`text-warning`);
        }
    } else if (themeIsRed) { // ou s'il est noir, on enlève les attributs
        bodyEl.classList.remove('bg-danger');
        for (let index = 0; index < textElements.length; index++) {
            textElements[index].classList.remove(`text-black`);
        }
    }
    bodyEl.classList.add(`bg-${backgroundColor}`); // puis on rajoute les nouveaux attributs
    for (let index = 0; index < textElements.length; index++) {
        textElements[index].classList.add(`text-${textColor}`);
    }
    // Et enfin on actualise les variables qui indiquent quelle est la couleur actuelle
    themeIsBlack = true;
    themeIsGreen = false;
    themeIsRed = false;
}


// ------------------------CRÉATION DE LA FONCTION GREEN THEME -----------------------------

// Même logique que pour la fonction précédente
function greenTheme() {
    const textElements = document.getElementsByClassName('changing-color');

    textColor = "warning";
    backgroundColor = "success";
    if (themeIsBlack) {
        bodyEl.classList.remove('bg-black');
        for (let index = 0; index < textElements.length; index++) {
            textElements[index].classList.remove(`text-white`);
        }

    } else if (themeIsRed) {
        bodyEl.classList.remove('bg-danger');
        for (let index = 0; index < textElements.length; index++) {
            textElements[index].classList.remove(`text-black`);
        }
    }
    bodyEl.classList.add(`bg-${backgroundColor}`);
    for (let index = 0; index < textElements.length; index++) {
        textElements[index].classList.add(`text-${textColor}`);
    }

    themeIsBlack = false;
    themeIsGreen = true;
    themeIsRed = false;
}

// ------------------------ CRÉATION DE LA FONCTION RED THEME ----------------------------

// Même logique que pour la fonction précédente
function redTheme() {
    const textElements = document.getElementsByClassName('changing-color');

    textColor = "black";
    backgroundColor = "danger";
    if (themeIsBlack) {
        bodyEl.classList.remove('bg-black');
        for (let index = 0; index < textElements.length; index++) {
            textElements[index].classList.remove(`text-white`);
        }
    } else if (themeIsGreen) {
        bodyEl.classList.remove('bg-success');
        for (let index = 0; index < textElements.length; index++) {
            textElements[index].classList.remove(`text-warning`);
        }
    }
    bodyEl.classList.add(`bg-${backgroundColor}`);
    for (let index = 0; index < textElements.length; index++) {
        textElements[index].classList.add(`text-${textColor}`);
    }

    themeIsBlack = false;
    themeIsGreen = false;
    themeIsRed = true;
}

// On crée les appels de fonctions au clic sur les éléments correspondants

const blackThemeEl = document.getElementById("black-theme");
const redThemeEl = document.getElementById("red-theme");
const greenThemeEl = document.getElementById("green-theme");

blackThemeEl.addEventListener("click", blackTheme);
greenThemeEl.addEventListener("click", greenTheme);
redThemeEl.addEventListener("click", redTheme);