const container = document.querySelector('#container'); // Obtient un élément de conteneur HTML
const activeCharacter = document.querySelector('#active-character');
let characters = [];

// --------------- FETCH DE l'API -------------------

// la ligne ci-dessous renvoie à l'API obtenue depuis mon compte
// fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=801a4c2ace85cb0249e88ae5fc8f04f7&hash=ef42a35292d209445ba7ab7141705c57`)

// la ligne ci-dessous renvoie à l'API depuis le compte de Sofiane
fetch(`https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=15328c79dbac5e06a3f67c7fc8380289&hash=1cb4e898f70ee7f5eda4717d22721077`)
    .then((response) => response.json())
    .then((result) => createHtml(result));

// je crée une fonction pour l'affichage html
function createHtml(result) {

    characters = result.data.results;
    let i = 0;
    let html = '';

    // Parcourt tous les résultats et construit le HTML avec les données
    characters.forEach(character => {
        if (character.thumbnail.path.includes("image_not_available") || !character.description) {
            console.log("oui");
            i++;
        } else {
            console.log("non");
            html += `<li value="${i}" class="arial" text-black onclick="updateCharacter(this.value)"><a>${character.name}</a></li>`;
            i++;
        }
    });

    container.innerHTML += html; // Met à jour le contenu HTML de l'élément de conteneur avec le HTML créé
}

bodyEl.classList.add(`bg-${backgroundColor}`);


// --------------- RAJOUT DU PERSONNAGE SÉLECTIONNÉ, APPELÉ SUR LE "ONCLICK" -------------------

function updateCharacter(selectedIndex) {
    const selectedCharacter = characters[selectedIndex];


    const html = `
        <h2 class="changing-color text-${textColor}">${selectedCharacter.name}</h2>
        <p class="my-3 changing-color text-${textColor}">${selectedCharacter.description}</p>
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

// --------------- GESTION DES BORDURES LORS DU CHARGEMENT DE LA PAGE -------------------

container.addEventListener("change", function () {
    if (container.value === "selected") {
        activeCharacter.classList.add("hide");
    }

    else {
        activeCharacter.classList.remove("hide");
    }
});

