import {hideElements} from "./hideElements.js";

export function gameOver(win) { // shows win/game over message
        let winMessage = document.getElementById('statusMessage');
        let btnWrapper = document.querySelector('.button-wrapper');
        hideElements('hidden',btnWrapper);
        if (win) {
            winMessage.innerHTML = "You Win";
            winMessage.style.color="green";
        } else {
            winMessage.innerHTML = "Game Over";
            winMessage.style.color="rgb(239, 83, 80)";
        }
    }
