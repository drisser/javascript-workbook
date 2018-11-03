'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const vowels = ['a','e','i','o','u']; //array of all possible vowels

const isString = (word) => typeof word === 'string'; //makes sure the user enters a string

const checkFirstLetter = (word) => { //checks to see if the first letter is a vowel, if it is, the function will end early 
  if (vowels.indexOf(word[0]) !== -1){
    return true
  } else return false
}

const pigLatin = (word) => {
  let wordArr = []; //new arr to be used later
  let translatedWord = ''; //this string will be the final result of the function
  if (isString) {
    if (checkFirstLetter(word[0])){
      return word + 'yay'
    } else for (let i = 0; i < word.length; i++){ //loops through each index of the entered word
      if (vowels.indexOf(word[i]) >= 0) { //checks to see if the letter is a vowel
        return translatedWord + wordArr.join("") + 'ay'; //adds the letters at the end of wordArr to the translatedWord string
      } else {
        wordArr.push(word[i]); //pushes the letter to wordArr
        translatedWord = word.slice(i+1); //remaining letters 
      }
    }
  } 
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
