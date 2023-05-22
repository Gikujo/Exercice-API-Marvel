
fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=801a4c2ace85cb0249e88ae5fc8f04f7&hash=ef42a35292d209445ba7ab7141705c57`)
    .then((response) => response.json())
    .then((result) => createHtml(result));

// je crée une fonction pour l'affichage html
function createHtml(result) {

    const characters = result.data.results;


    // J'initialise la variable qui va donner les numéros d'options de la liste
    let i = 1;

    const container = document.querySelector('#container'); // Obtient un élément de conteneur HTML
    let html = ''; // Initialise la variable HTML vide


    // Parcourt tous les résultats et construit le HTML avec les données
    characters.forEach(character => {
        html += `<option value="${i}">${character.name}</option>`;
        i++;
    });

    container.innerHTML += html; // Met à jour le contenu HTML de l'élément de conteneur avec le HTML créé
}

function updated(element) {
    var idx = element.selectedIndex;
    var val = element.options[idx].value;
    var content = element.options[idx].innerHTML;
    alert(val + " " + content);

    let activeCharacter = document.querySelector(`#active-character`);

    html = ``;

    html += `<h1></h1>`;

    activeCharacter.innerHTML = html;
}

console.log(character)