// import * as winner from './getWinner.js';

//this script handles rounds of play
let roundsToPlay = 0;

//button click will determine rounds

//this runs after results are displayed...
function checkRoundsLeft(){
    if(roundsToPlay > 0){
        console.log('Another round coming up...');
        //display results of round
        // winner.getWinner();   
    }
    else {
        console.log('That\'s it folks!');
    }

}