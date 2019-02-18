import {Hangman} from "./components/hangmanComp.js";
import {startNewGame} from "./components/startNewGame.js";

window.onload = function() {

    let startGame = new Hangman();  //initiates first game on windo load
    startGame.setupNewWord();

    let newGame = document.getElementById('newGame');
    newGame.onclick = startNewGame; //set new game handler

};
