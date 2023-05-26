// --------------- GESTION DES DIFFÉRENTS THÈMES DE COULEUR -------------------
const bodyEl = document.querySelector('body');
const elements = document.getElementsByClassName('changing-color');
const textColor = Array.from(elements);

console.log(`textColor : ${textColor.length}`);
console.log(bodyEl);

let themeIsBlack = true;
let themeIsGreen = false;
let themeIsRed = false;
let color = "white";

if (themeIsBlack == true) {
    bodyEl.classList.add('bg-black');
    const textColor = Array.from(elements);
    textColor.forEach(element => {
        element.classList.add("text-white");
    });
    color = "white";
}

if (themeIsGreen == true) {
    bodyEl.classList.add('bg-success');
    color = "warning";
}

if (themeIsRed == true) {
    bodyEl.classList.add('bg-danger');
    color = "black";
}

function blackTheme() {

    const textColor = Array.from(elements);
    if (themeIsBlack == true) {
        return;
    } else if (themeIsGreen == true) {
        bodyEl.classList.remove('bg-success');
        textColor.forEach(element => {
            element.classList.remove("text-warning");
        });
        themeIsGreen = false;
    } else if (themeIsRed == true) {
        bodyEl.classList.remove('bg-danger');
        textColor.forEach(element => {
            element.classList.remove("text-black");
        });
        themeIsRed = false;
    }

    themeIsBlack = true;
    bodyEl.classList.add('bg-black');
    textColor.forEach(element => {
        element.classList.add("text-white");
    });

}

function greenTheme() {

    const textColor = Array.from(elements);
    if (themeIsBlack == true) {
        bodyEl.classList.remove('bg-black');
        textColor.forEach(element => {
            element.classList.remove("text-white");
        });
        themeIsBlack = false;
    } else if (themeIsGreen == true) {
        return;
    } else if (themeIsRed == true) {
        bodyEl.classList.remove('bg-danger');
        textColor.forEach(element => {
            element.classList.remove("text-black");
        });
        themeIsRed = false;
    }

    themeIsGreen = true;
    bodyEl.classList.add('bg-success');
    textColor.forEach(element => {
        element.classList.add("text-warning");
    });

}

function redTheme() {

    const textColor = Array.from(elements);
    if (themeIsBlack == true) {
        bodyEl.classList.remove('bg-black');
        textColor.forEach(element => {
            element.classList.remove("text-white");
        });
        themeIsBlack = false;
    } else if (themeIsGreen == true) {
        bodyEl.classList.remove('bg-success');
        textColor.forEach(element => {
            element.classList.remove("text-warning");
        });
        themeIsGreen = false;
    } else if (themeIsRed == true) {
        return;
    }

    themeIsRed = true;
    bodyEl.classList.add('bg-danger');
    textColor.forEach(element => {
        element.classList.add("text-black");
    });

}

// Piste : Définir des variables pour la couleur de texte et celle du background, et faire des fonctions qui les font évoluer.