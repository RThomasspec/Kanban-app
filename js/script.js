

function addTask(idContainer, idInput){
    const inputBox = document.getElementById(idInput);
    if(inputBox.value === "" || inputBox.value.trim() === ""){
        // message error
    }else{
        const listcontainer = document.getElementById(idContainer);
        let barreHorizontal = document.createElement("div");

        barreHorizontal.classList.add("barre-horizontal");
        listcontainer.appendChild(barreHorizontal);
        let li = document.createElement("li");
        //innerHtml sert a denir le contenu html de la balise précisé
        li.innerHTML = inputBox.value;
        // permet d'ajouter un composant html au composant précisé
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);   
    }
    inputBox.value="";

} 


const listContainers = document.querySelectorAll('.list-container');
listContainers.forEach(container => {
    
    container.addEventListener('click', function(e) {
        if(e.target.tagName === "SPAN"){
            // tu viens recuperer le parent du span qui est li pour pouvoir le supprimer.
            const liElement = e.target.parentNode;
            liElement.remove();
        }
    }, false);

});


