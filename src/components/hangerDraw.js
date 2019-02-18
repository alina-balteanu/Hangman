import {unhideElements} from "./unhideElements.js";

export function hangerDraw(num){//helper function triggers show hanger drawing
    let show=document.getElementById(`show${num}`);
    unhideElements('hidden',show);
}
