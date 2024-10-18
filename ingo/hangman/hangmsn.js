// player 1 chooses a word

let word = selectWord().toLowerCase()

// if faulty characters, askes for new word

while (!checkWord(word)) {
  alert('Endast ett ord med max 10 bokstäver')
  word = selectWord().toLowerCase()
}

let wordObject = objectifyWord(word)

console.log(wordObject)

let guessedLetter = guessLetter()

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

function guessLetter () {
  return prompt('Gissa en bokstav')
}

// organising the words letters in an object

function objectifyWord (word) {
  let key = 0
  const wordObject = {}

  for (const char of word) {
    wordObject[key] = {[char] : false}
    key++
  }
  return wordObject
}

// run guessed letter with letters in word

function checkGuess (guess, wordObject) {
  for ()
}
