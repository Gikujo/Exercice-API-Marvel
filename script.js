const container = document.querySelector('#container'); // Obtient un élément de conteneur HTML
const activeCharacter = document.querySelector('#active-character');
let characters = [];

// fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=801a4c2ace85cb0249e88ae5fc8f04f7&hash=ef42a35292d209445ba7ab7141705c57`)
//     .then((response) => response.json())
//     .then((result) => createHtml(result));

fetch(`https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=15328c79dbac5e06a3f67c7fc8380289&hash=1cb4e898f70ee7f5eda4717d22721077`)
    .then((response) => response.json())
    .then((result) => createHtml(result));

// je crée une fonction pour l'affichage html
function createHtml(result) {

    characters = result.data.results;
    let i = 0; // J'initialise la variable qui va donner les numéros d'options de la liste
    let html = ''; // Initialise la variable HTML vide


    // Parcourt tous les résultats et construit le HTML avec les données
    characters.forEach(character => {


        if (character.thumbnail.path.includes("image_not_available") || !character.description) {
            console.log("oui");
            i++;
        } else {
            console.log("non");
            html += `<option value="${i}" class="arial">${character.name}</option>`;
            i++;
        }

    });

    container.innerHTML += html; // Met à jour le contenu HTML de l'élément de conteneur avec le HTML créé
}

function updateCharacter(selectedIndex) {

    const selectedCharacter = characters[selectedIndex];


    const html = `
        <h1>${selectedCharacter.name}</h1>
        <p class="my-3">${selectedCharacter.description}</p>
        <img class="w-100"src="${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}" alt="${selectedCharacter.name}">
    `;
    activeCharacter.classList.remove("d-none");
    activeCharacter.classList.add("animation");
    setTimeout(() => {
        activeCharacter.innerHTML = html;
    }, 50);

    setTimeout(() => {
        activeCharacter.classList.remove("animation");
    }, 1100);


}

activeCharacter.addEventListener("double-click", function () {
    alert("Cliqué !");
});

// Effacer les bordures du carré de personnage lorsque l'option sélectionnée est celle par défaut :
container.addEventListener("change", function () {
    if (container.value === "selected") {
        activeCharacter.classList.add("hide");
    }

    else {
        activeCharacter.classList.remove("hide");
    }
});