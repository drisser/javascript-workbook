// 1 Write a javascript program to display the current date and time
const returnDate = () => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  return mm + '/' + dd + '/' + yyyy;
}
returnDate();

// 2 Write a JavaScript program to convert a number to a string
const makeString = (num) => String(num)
makeString(9)

// 3 Write a JavaScript program to convert a string to the number
const makeNum = (word) => Number(word)
makeNum('1')

// 4 Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String
const dataTypes = (value) => console.log(typeof value)
dataTypes(7)
dataTypes('word')
dataTypes(true)
dataTypes(null)

// 5 Write a JavaScript program that adds 2 numbers together
const add = (num1, num2) => num1 + num2
add(1, 2)

// 6 Write a JavaScript program that runs only when 2 things are true
const ifTrue = (item1, item2) => {
  if (item1 && item2) {
    return true
  }
}
ifTrue(7, 0)
ifTrue(4, 'word')

// 7 Write a JavaScript program that runs when 1 of 2 things are true
const oneTrue = (input1, input2) => {
  if (input1 || input2) {
    return true
  }
}
oneTrue(7, 0)
oneTrue(0, 0)

// 8 Write a JavaScript program that runs when both things are not true
const noTrue = (first, second) => {
  if (first || second) {
    return false
  } else {
    return true
  }
}
notrue(7, "word")
noTrue(0, null)