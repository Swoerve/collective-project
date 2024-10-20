let word
let wordObject
let guessedLetter
let uncompleteWord = true
let rightGuess = false
let wrongGuess = 0
let gameOver = false



async function playGame () {    // async för delay funktionen

  // player 1 chooses a word

  word = selectWord().toLowerCase()

  // if faulty characters, askes for new word

  while (!checkWord(word)) {
    alert('Endast ett ord med max 10 bokstäver')
    word = selectWord().toLowerCase()
  }
  let letters = sortLetters(word)

  addLetterContainer(word)
  removeButton()
  resetImage()


  await delay(1000);            // delay funktion

  while (uncompleteWord && !gameOver) {
    await delay(1000);          // delay
    guessedLetter = prompt('Gissa en bokstav')
    checkGuess(guessedLetter, letters)
    if (checkCompleteWord(letters)) {
      uncompleteWord = false
    }
    if (rightGuess === false) {
      hangman(wrongGuess)
      wrongGuess++
    }
    rightGuess = false
    if (wrongGuess === 10) {
      gameOver = true
    }
  }



}



///////////////////////////////////////////////////
/////////////////////FUNKTIONER////////////////////
///////////////////////////////////////////////////


//asking for a word to be used

function selectWord () {
  return prompt('Välj ett ord för din motståndare, max 10 bokstäver')
}

//checking for only letters and max 10 of them

function checkWord (word) {
  if (/^[a-zåäö]+$/i.test(word) && word.length <= 10) {
    return true
  } else {
    return false
  }
}

// organising the words letters in an array

function sortLetters (word) {
  const wordLetters = []

  for (const letter of word) {
    wordLetters.push({[letter]: false})
  }
  return wordLetters
}

// run guessed letter with letters in word

function checkGuess (guess, letters) {
  let howMany = letters.length

  for (let i = howMany; i > 0; i--) {
    if (guess in letters[i-1]) {
      letters[i-1] = {[guess] : true}
      rightGuess = true
      addLetterToDiv(guess, i-1)
    }
  }
}

// check if word is completed

function checkCompleteWord (letters) {

    for (const letter of letters){
      let complete = Object.values(letter)
      if (complete[0] === false) {
        return false
      }
    }
    return true
  }

  // add divs as containers on website

  function addLetterContainer (word) {

    for (const letter in word) {
      const letterDiv = document.createElement("div")
      letterDiv.innerText = "_"
      letterDiv.setAttribute("id", letter)
      letterDiv.setAttribute("class", "letterContainer")
      document.getElementById("wordDisplay").appendChild(letterDiv)
    }
  }

  // add letter to div, called in checkGuess()

  function addLetterToDiv (letter, divnr) {

    const div = document.getElementById(divnr)
    div.innerText = letter.toUpperCase()

  }

  // delay funktion för att hinna ladda in alla div's

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function removeButton() {
    let button = document.getElementById("playBtn")
    button.remove()
  }

  // byt bild hangman-gubben

  function hangman (nr) {
    if (nr < 9) {
      let image = document.getElementById("hangman")
      image.src = "images/hg_" + (nr + 1) + ".png";
    } else {
      let image = document.getElementById("hangman")
      image.src = "images/hg_10.gif"
    }

  }

  function resetImage () {
    let image = document.getElementById("hangman")
    image.src = "images/hg_0.png";
  }
