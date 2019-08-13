function isOdd(num) {
    return num % 2 === 1;
}

var userInput = 0;


while (!isOdd(userInput)) {
    userInput = +prompt("Please enter an odd number between 1 and 50 ");
}


console.log('Number to skip is: ' + userInput);
for (var i = 1; i <= 50; i += 2) {
    if (i === parseFloat(userInput)) {
        console.log('Yikes! Skipping number: ' + userInput);
        continue;
    }
    console.log('Here is an odd number: ' + i);
}