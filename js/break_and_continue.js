(function(){
    "use strict";


function isOdd(num) {
    return num % 2 === 1;
}
<<<<<<< HEAD

var userInput = 0;
=======
>>>>>>> loops-exercise

var userInput;

<<<<<<< HEAD
while (!isOdd(userInput)) {
    userInput = +prompt("Please enter an odd number between 1 and 50 ");
=======
while (true) {
    userInput = +prompt("Please enter an odd number between 1 and 50");
    if (isOdd(userInput) && (+userInput > 1 && +userInput < 50)) break;
>>>>>>> loops-exercise
}


console.log('Number to skip is: ' + userInput);
for (var i = 1; i <= 50; i += 2) {
    if (i === parseFloat(userInput)) {
        console.log('Yikes! Skipping number: ' + userInput);
        continue;
    }
    console.log('Here is an odd number: ' + i);
}

// For each example

var shapes = ['square', 'rectangle', 'circle', 'triangle'];
var lastOne = 'last';

// loop through the array and log the values
shapes.forEach(function(shape) {
    console.log('Here is a lovely shape: ' + shape + '.');
    lastOne = shape;
});

console.log('The last shape is ' + lastOne);
})();