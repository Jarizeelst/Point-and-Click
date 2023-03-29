document.getElementById("mainTitle").innerText= "Point and Click adveture";

const offsetCharacter = 16;
const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");

gameWindow.onclick = function(e){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    mainCharacter.style.left = x - offsetCharacter +"px";
    mainCharacter.style.top = y - offsetCharacter + "px";


    console.log(e.target.id);
    switch(e.target.id){
        case"chest":
        console.log("this is locked or do you have a key?");
        break;
        default: 
        console.log("What can i do here?");
    }
}

function showMessage(){
    
}