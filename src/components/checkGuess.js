    export function checkGuess(wordToGuess, userLetter) { //handles check logic, and replaces letters in placeholder when a match is found
        let placeholderP = document.getElementById('placeholderP');
        let placeholderArray = Array.from(placeholderP.innerHTML);
        placeholderArray = placeholderArray.map((el, i) => { //check if letter exists in the guess word, and if yes,replace it in the placeholder and display it
            if (wordToGuess[i] == userLetter) {
                return el = userLetter;
            } else {
                return el;
            }
        });

        placeholderP.innerHTML = placeholderArray.join('');
    }
