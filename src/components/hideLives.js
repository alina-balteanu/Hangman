import {hideElements} from "./hideElements.js";

export function hideLives(num){//helper function triggers hides lives
    let life=document.getElementById(`life${num}`);
    hideElements('hiddenLife',life);
}
