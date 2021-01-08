let character;

function wiggleMe(userChoice, btn){

    
    
    console.log((btn.classList.contains("wiggle")));
    if(btn.classList.contains("wiggle")){
        confirmBtn.classList.add("d-none");
        btn.classList.remove("wiggle");
        character = ""
    } else{ 
        confirmBtn.classList.remove("d-none");
        btn.classList.add("wiggle");
        character = userChoice;
    }
    choice.innerText = character.toUpperCase();
}

// any press of these has to shut all the others off


export { wiggleMe }