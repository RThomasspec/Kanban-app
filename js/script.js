

const listContainers = document.querySelectorAll('.list-container');



function addTask(idContainer, idInput) {
    const inputBox = document.getElementById(idInput);
    if (inputBox.value === "" || inputBox.value.trim() === "") {
        // message error
    } else {
        const listcontainer = document.getElementById(idContainer);
        let barreHorizontal = document.createElement("div");

        barreHorizontal.classList.add("barre-horizontal");
        listcontainer.appendChild(barreHorizontal);
        let li = document.createElement("li");
        li.classList.add("list");
        //innerHtml sert a denir le contenu html de la balise précisé
        li.innerHTML = inputBox.value;
        li.setAttribute('draggable', 'true');
        // permet d'ajouter un composant html au composant précisé
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        let div = document.createElement('div');
        div.classList.add("list-img");
        let img = document.createElement('img');
        img.src = '../img/grab.png';
        img.setAttribute('draggable', 'false');

        div.appendChild(img);
        li.appendChild(div);

    }
    inputBox.value = "";

    const lists = document.querySelectorAll('.list');
    for (const list of lists) {
        //nous obtenons une référence à l'élément que l'utilisateur a glissé
        list.addEventListener("dragstart", function (e) {
            selected = e.target;
            for (const listContainer of listContainers) {
    
                // gestionnaire d'événements du conteneur cible
                listContainer.addEventListener("dragover", function (e) {
                    // permet au container de recevoir le drop
                    e.preventDefault();
                })
                //  nous gérons le déplacement de l'élément déplaçable du conteneur d'origine vers la zone de dépôt
                listContainer.addEventListener("drop", function (e) {
                    if (selected) {
                        listContainer.appendChild(selected);
                        selected = null;
                    }
                })
            }
        })
    }
}


const lists = document.querySelectorAll('.list');
listContainers.forEach(container => {

    container.addEventListener('click', function (e) {
        if (e.target.tagName === "SPAN") {
            // tu viens recuperer le parent du span qui est li pour pouvoir le supprimer.
            const liElement = e.target.parentNode;
            liElement.remove();
        }
    }, false);

});











