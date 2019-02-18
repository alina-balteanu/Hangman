import {Hangman} from "./hangmanComp.js";
import {unhideElements} from "./unhideElements.js";
import {hideElements} from "./hideElements.js";

export function startNewGame() {
    let btnWrapper = document.querySelector('.button-wrapper');
    let winMessage = document.getElementById('statusMessage');
    let wrongLetters = document.querySelector('#wrongLetters span');
    let warningText = document.querySelector('#warningText');
    let hiddenHangman=Array.from(document.querySelectorAll('svg .bodyPart'));
    let hiddenLives=Array.from(document.querySelectorAll('.lives'));

    for(let bodyPart of hiddenHangman ){
        hideElements('hidden',bodyPart);
    }


    for(let life of hiddenLives ){
        unhideElements('hiddenLife',life);
    }

    wrongLetters.innerHTML='';
    unhideElements('hidden',btnWrapper);
    hideElements('hidden',wrongLetters.parentNode,warningText);
    winMessage.innerHTML='Vanilla JavaScript Hangman Game';
    winMessage.style.color="black";
    let oldP = document.getElementById('placeholderP');
    if (oldP.parentNode) {
        oldP.parentNode.removeChild(oldP);
    }

    let startGame = new Hangman();
    startGame.setupNewWord();

}
