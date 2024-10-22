
// get list of all 5 letter words
const allWords = require('./words');
// has these letters
const hasLetters = ['i','a','m']; 
// must not has these letters
const mustNotHaveLetters = ['p','s'];
// must have selected letters in these positions
const mustHaveLettersInPosition = [,,,,'m']
// not in these positions
const mustNotHaveLettersInPosition = ['a','p','i','s',]

const containsLetter = (word, letter) => word.includes(letter);

const doesNotContainLetter = (word, letter) => !word.includes(letter);


const hasLetterInPosition = (word, letter, index) => {
  if (letter === undefined) return true;

  return word[index] === letter;
}

const doesNotHaveLetterInPosition = (word, letter, index) => {
  if ( letter === undefined) return true;

  return word[index] !== letter;
}

const filteredWords = allWords.filter(word => {
  return (
  hasLetters.every(letter => containsLetter(word, letter)) &&
  mustNotHaveLetters.every(letter => doesNotContainLetter(word, letter)) &&
  mustHaveLettersInPosition.every((letter, index) => hasLetterInPosition(word, letter, index)) &&
  mustNotHaveLettersInPosition.every((letter,index) => doesNotHaveLetterInPosition(word, letter, index))
  )
})

console.log(filteredWords);
console.log('possible words', filteredWords.length);