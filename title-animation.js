/**********Pour que ce script fonctionne correctement,
 penser à rajouter l'attribut "defer" lorsqu'on le cible depuis le head.************/


const conteneur = document.querySelector('h1');
const texte = conteneur.textContent;

// Sépare le texte en lettres individuelles
const lettres = texte.split('');

// Vide le contenu du conteneur
conteneur.innerHTML = '';

// Ajoute chaque lettre avec une balise <span>
lettres.forEach((lettre) => {
    const span = document.createElement('span');

    span.textContent = lettre;
    if (lettre.includes(" ")) {
        span.classList.add("space");
    }
    conteneur.appendChild(span);
});

const spaceLetters = document.getElementsByClassName('space');
const spaceElements = Array.from(spaceLetters);
spaceElements.forEach(element => {
    element.innerHTML = `<div class="space-div"></div>`;
});
