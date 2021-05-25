const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let firstThreeChar = str.slice(0,3)

let nextChar = str.slice(3);
let newStr = nextChar + firstThreeChar;
console.log(newStr)


//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`${newStr} means ${str} in pig latin.`)

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numOfLetters = input.question('How many letters to relocate?');
let numCharsInt = Number(numOfLetters);
firstCharacter = str.slice(0,numCharsInt);
newStr = secondCharacter + firstCharacter;

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numCharsInt > str.length) {
  let firstCharacter = str.slice(0,3);
  let secondCharacter = str.slice(3);
  let newestStr = secondCharacter + firstCharacter;
}