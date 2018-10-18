'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//CODE PLAN
//check if input is valid 'isWord' 
//if falsey, return 'please enter a word'
//if truthy, check to see if the first letter of the word is a vowel
//if truthy, return the original string + 'yay'
//if falsey, convert string to an array 'arrWord'
//loop through the array comparing each letter against 5 vowels
//after finding the first vowel, shift the letters before it to the end of the array
//add 'ay' to the end of the array
//convert the new array back to a string
//return the new string

const isWord = (word) => typeof word === 'string'; //this function checks if the user inputs a word

const arrWord = (word) => word.split(''); //this function converts the string to an array

const pigLatin = (word) => {
  if (isWord(word)){
    if (word[0] === 'a' || word[0] === 'e' || word[0] === 'i' || word[0] === 'o' || word[0] === 'u'){
      return word + 'yay' //this function checks to see if the first letter of the string is a vowel, if truthy, it returns the word in pig latin
    } else {
      const newArr = arrWord(word);
    } //this is where I got stuck. After doing lots of googling, I still couldn't figure it out, I think understand how to manipulate the different parts-
      //of the array (using shift and push?) but I couldn't figure out how to loop through the array and then do something after the loop found the first vowel
  } return 'please enter a word'
}

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
