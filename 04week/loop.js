'use strict'

// Use a for loop to console.log each item in the array carsInReverse.

const carsInReverse = ['Toyota', 'Mazda', 'Ford', 'Honda']

carsInReverse.forEach(function(item){
  console.log(item)
});

const actualForLoop = () =>{
  for (i = 0; i < carsInReverse.length; i++)
    console.log(carsInReverse[i])
}

// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
 
const myObject = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

// Use a for...in loop to console.log each key.

for (key in myObject){
  console.log(key)
}

// Then use a for...in loop and if state to console.log the value associated with the key birthDate.

for (let key in myObject){
  console.log(myObject[key])
} // I didn't fully understand the directions on this question, are we supposed to use an if statement?
  

// while loop
// Use a for loop to console.log the numbers 1 to 1000.

for (i = 1; i < 1001; i++){
  console.log(i)
}

// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.

let i = 0;

do {
  i++;
  console.log(i);
} while (i < 1000)

// When is a for loop better than a while loop?
// A for loop should be used when you know the number of times it needs to run
// A while loop should be used when the number of iterations is unknown, for example when it is being based on a user input


// How is the readability of the code affected?
// I think both loops are pretty readable personally, a while loop reads a little more like real english (in my opinion) when compared to a for loop

// What is the difference between a for loop and a for...in loop?
// you set the number of iterations in a for loop, but a in loop iterates over keys and values in an object

// What is the difference between a while loop and a do...while loop?
// as far as I can tell they are mostly the same except that a do while loop may be used when you intend for the loop to run at least once before checking the while condition