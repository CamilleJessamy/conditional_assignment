// 1. Write a block of code that checks and logs whether variables are equal or not.
// let x = 56;
// let y = 56;
// if (x !== y) {
//   console.log("Values are not equal");
// } else {
//   console.log("Values are equal");
// }
// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'

// let age = 21;
// let age2 = 34;
// if (age > age2) {
//   console.log("Hello I'm the greater value");
// } else if (age < age2) {
//   console.log("Hello I'm the lesser value");
// } else {
//   (age === age2)
//   console.log("The numbers are equal.");
// }
//
// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.
//
// let e = "english";
// let s = "spanish";
// let g = "german";
// if (e) {
//   console.log("Hello, World");
// } else if (s) {
//   console.log("Hola, Mundo");
// } else {
//   console.log("Hallo, Welt");
// }

// 4. Do question 3 again but this time use a `switch` statement.
//
// var expr = "English";
// switch (expr) {
//   case "German":
//     console.log("Hallo, Welt");
//     break;
//   case "Spanish":
//     console.log("Hola, Mundo");
//     break;
//   default:
//     console.log("Hello,World");
// }
// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

// let numGrade = 64;
// if (numGrade > 90) {
//   console.log("You got an A, congrats!");
// } else if (numGrade >= 80) {
//   console.log("You got a B, good effort!");
// } else if (numGrade >= 70) {
//   console.log("You got a C, study harder next time.");
// } else if (numGrade >= 60) {
//   console.log("You got a D, maybe you should start studying?");
// } else {
//   console.log("You got an F for failure");
// }
//
// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
//
// Use an if - else statement to log:
//
//   * the number
//
//   * either in single or plural form. Exp: "5 cats" or "1 dog".
//
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
// let animalName = "alpaca";
// let numberOfAnimals = 10;
// if (numberOfAnimals < 2) {
//   console.log("One alpaca");
// } else if (numberOfAnimals >= 5) {
//   console.log("A herd of alpaca");
// } else {
//   console.log("Alpaca my bags!");
// }
// //
// 7. Write a block of code that logs whether a given number is even or odd.
//
// let someNumber = 17;
// if (someNumber % 2 === 0) {
//   console.log("This number is even");
// } else {
//   console.log("This number is odd");
// }
// 8. Do question 7 again but use a ternary.
//
// let someNumber = 17;
// someNumber % 2 === 0
//   ? console.log("This number is even")
//   : console.log("This number is odd");
// //
// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
let givenNumber = 0;
if (givenNumber === 0) {
  console.log("This number is equal to zero");
} else if (givenNumber < 0) {
  console.log("This number is negative");
} else {
  console.log("This number is positive");
}
