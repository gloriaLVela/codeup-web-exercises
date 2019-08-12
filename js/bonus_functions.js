(function () {

    "use strict";

//
// Function Drills
// Functions using conditionals but not loops or arrays:
//
//     Make a function named isOdd(number)
//
// function isOdd(num){
//     return num%2 === 1;
// }
//
// console.log(isOdd(9), 9, 'odd');
// console.log(isOdd(8), 8, 'odd');

// Make a function named isEven(number)
// function isEven(num){
//     return num%2 === 0;
// }
//
// console.log(isEven(9), 9, 'even');
// console.log(isEven(8), 8, 'even');

// Make a function named identity(input) that returns the input exactly as provided.

// function identity (input){
//     return input;
// }
//
// console.log(identity("Hello"), "Hello");
// console.log(identity(5), 5);

// Make a function named isFive(input)

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);
//
// function isFive(input){
//     return input === 5;
//
// }
//
// console.log(random,'equal to five', isFive(random));
// console.log(45,'equal to five', isFive(45));
// console.log(5,'equal to five', isFive(5));


// Make a function named addFive(input) that adds five to some input.

    function addFive(input){
        return input + 5;
    }


// Make a function named isMultipleOfFive(input)
// var random = Math.floor((Math.random() * 3) + 1);
//
    function isMultipleOfFive(input) {
        return input % 5 === 0;

    }

//
// console.log(random,'multiple of five', isMultipleOfFive(random));
// console.log(45,'multiple of five', isMultipleOfFive(45));


// Make a function named isThree(input)
// function isThree(num){
//     return num ===3;
// }
//
// console.log(5, 'is equal to 3' ,isThree(5));
// console.log(3, 'is equal to 3' ,isThree(3));

// Make a function named isMultipleOfThree(input)

    function isMultipleOfThree(input) {
        return input % 3 === 0;

    }
    //
    // console.log(9, 'is multiple of three', isMultipleOfThree(9));
    // console.log(5, 'is multiple of three', isMultipleOfThree(5));

// Make a function named isMultipleOfThreeAndFive(input)

    function isMultipleOfThreeAndFive(input) {
        return isMultipleOfFive(input) && isMultipleOfThree(input);
    }

    // console.log(15, ' is multiple of 3 and 5 ', isMultipleOfThreeAndFive(15));
    // console.log(20, ' is multiple of 3 and 5 ', isMultipleOfThreeAndFive(20));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
    function isMultipleOf(target, n) {
        return target % n === 0;
    }

    // console.log(10, 'is multiple of', 3, '?', isMultipleOf(10, 3));
    // console.log(15, 'is multiple of', 3, '?', isMultipleOf(15, 3));

// Make a function named isTrue(boolean)

    function isTrue(boolean) {
        return boolean == true;
    }

    // console.log(true, 'is true ', isTrue(true));
    // console.log(false, 'is true ', isTrue(false));

// Make a function named isFalse(boolean)

    function isFalse(boolean) {
        return boolean == false;
    }

    // console.log(true, 'is false ', isFalse(true));
    // console.log(false, 'is false ', isFalse(false));

// Make a function named isTruthy(input), remember that values other than true will behave like true

    function isTruthy(input){
        return Boolean(input);

    }


// Make a function named isFalsy(input), remember that values other than false behave like false
    function isFalsy(input) {
        return !Boolean(input);
    }

// Make a function named isVowel(letter)
    function isVowel(letter){
        return (letter.toLowerCase()  === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u")? true: false;
    }

    // console.log(isVowel("a"), "a");
    // console.log(isVowel("Z"), "Z");
    // console.log(isVowel("E"), "E");
    // console.log(isVowel("1"), "1");
    // console.log(isVowel("?"), "?");

// Make a function named isConsonant(letter)

    function isConsonant(letter){
        return (letter.toLowerCase() > "a" && letter.toLowerCase() <= "z") && !isVowel(letter);
    }

    // console.log(isConsonant("a"), "a");
    // console.log(isConsonant("B"), "B");
    // console.log(isConsonant("1"), "1");

// Make a function named isCapital(letter)

    function isCapital(letter){
        return (letter >= "A" && letter <= "Z");
    }

    // console.log(isCapital("a"), "a");
    // console.log(isCapital("A"), "A");
    // console.log(isCapital("B"), "B");
    // console.log(isCapital("1"), "1");
    // console.log(isCapital("z"), "z");

// Make a function named isLowerCase(letter)
    function isLowerCase(letter){
        return (letter >= "a" && letter <= "z");
    }

    // console.log(isLowerCase("a"), "a");
    // console.log(isLowerCase("B"), "B");
    // console.log(isLowerCase("A"), "A");
    // console.log(isLowerCase("1"), "1");
    // console.log(isLowerCase("z"), "z");

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter

    function hasLowerCase(str) {
        return (/[a-z]/.test(str));
    }

    // console.log(hasLowerCase("The fox and the hound"), true);
    // console.log(hasLowerCase("THE ADD"), false);

// Make a function named isSpace(letter) that returns if a character is a space character
    function isSpace(input){
        return (input === " " );
    }

    // console.log(isSpace("T"), false);
    // console.log(isSpace(" "), true);
    // console.log(isSpace("Q"), false);


// Make a function named isZero(number)
    function isZero(input){
        if (!isNaN(parseFloat(input))) return false;
        return parseFloat(input) === 0;
    }
// Make a function named notZero(input) that returns true if the input is not zero
// Write a function named lowerCase(string)
// Write a function named double(n) that returns a number times two
// Write a function named triple(n) that returns a number times 3
// Write a function named quadruple(n) that returns a number times 4
// Write a function named half(n) that returns 1/2 of the provided input
// Write a function named subtract(a, b) that returns a minus b
// Write a function named multiply(a, b) that returns the product of a times b
// Write a function named divide(a, b) that returns a divided by b
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
// Write a function named cube(n) that returns n * n * n
// Write a function named squareRoot(n) that returns the square root of the input
// Write a function named cubeRoot(n) that returns the cube root of the input
// Write a function named invertSign(number) that returns a negative version of a positive number, a positive version of negative, and false for all else.
// Write a function named degreesToRadians(number)
// Write a function named radiansToDegrees(number)
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
// Make a function named trim(string) that removes empty spaces before and after the input.
// Make a function named areEqual(input1, input2) that returns if both inputs have the same value
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
// Make a function named not(input) returns the input with a flipped boolean
// Make a function named notNot(input) that the negation of the negation of the input.
// Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// Write a function called reverseString(string) that reverses a string
// Make a function named absoluteValue(number) that returns the absolute value of a number.
// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.


//     Simple Function Drills
// Make a function called returnTwo() that returns the number 2 when called
// Test this function with console.log(returnTwo())
//
//     Make a function called sayHowdy() which console.logs the string “Howdy!”
//
// Test this function by directly calling sayHowdy()
//
// Remember this function does not need a defined return value
//
// Make a function called returnName() that returns the string of your name
//
// Test this function with console.log(returnName())
//
//     Make a function called addThree() which takes in a number input and returns the number plus 3.
// Test this function with console.log(addThree(5))
//
//     Make a function called sayString() which returns the string input passed in.
// Test this function with console.log(sayString('codeup'))
//

//     Challenge Function Drills
// Write a function called identity(input) that takes in an argument called input and returns that input.
//
//     Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
//
// Write a function called first(input) that returns the first character in the provided string.
//
//     Write a function called last(input) that returns the last character of a string
//
// Write a function called rest(input) that returns everything but the first character of a string.
//
//     Write a function called reverse(input) that takes a string and returns it reversed.
//
//     Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
//
//     Write a function called count(input) that takes in a string and returns the number of characters.
//
//     Write a function called add(a, b) that returns the sum of a and b
//
// Write a function called subtract(a, b) that return the difference between the two inputs.
//
//     Write multiply(a, b) function that returns the product
//
// Write a divide(numerator, denominator) function that returns a divided by b
//
// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
//
// Write the function square(a) that takes in a number and returns the number multiplied by itself.
//
//     Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
//
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
//


// Even More Function Bonuses
// Create a function that will return how many whitespace characters are at the beginning and end of a string.
//
//     Create a function that takes in two string inputs.
//
//     If the second string input is present in the first, return the first input string with the second input string removed from it.
//     If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
//     If the second string input is not present in the first, return the first string as entered in the function.
// Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).
//


// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
//
// Create a function returnTrueMessage() that returns the string "Hey, it's true!"
//
// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiment passing in different functions.
// Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
//
// The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.

//
// __
// Write a function makeJustinMessage() that returns the string "It's Justin!" if the input to the function is the string "justin" and "It's not Justin" otherwise.
//     If the input contains white space or numbers, return the string "INVALID INPUT".
//     __
// Write a function that returns a string describing the action to be taken for a given street light color input. For example, if the function input is the string "red", a message like "STOP!" could be returned from the function. Input should not be case sensitive.
//     __
// Create a function that simply returns an input as an output. If no input is passed to the function when it is called, return the string "no input provided."
// __
// Create a function that returns a unique message string for a given digit input. If the input is not a single digit, return the string "too many digits". If the input is not a number, return "invalid input". String digits like "1" or "9" are valid inputs.
//     __
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
//     Catch any invalid inputs (not indicating a day of the week).
// For each day, allow the user to enter the abbreviated day (e.g. 'Monday', 'monday', 'Mon', or 'mon')
// __
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
// - refactor to use a ternary operator
// __
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months
// __
// GOLD STAR BONUS
// Create a distance-unit-conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//     Prompt the user for a second unit of measurement to convert to.
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
// Use these conversion functions to make the correct unit conversion
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//     DOUBLE GOLD STAR BONUS
//     Allow unit conversion to metric system units
//     // Collapse


// Heather is wanting to join an after school club. She is currently involved with another club at school, but luckily all after
// school clubs will only meet on one day out of the week. Return an alert to Heather as to whether or not she can join another
// club.
//
// Rodrigo is a chef, and needs to buy food for his restaurant. He's worked out a deal with the shop and can get his food for a
// twenty percent discount, but the shop changes their prices from week to week. Rodrigo needs to buy tofu, lamb, and potatoes.

// Return an alert to Rodrigo with his total based on how much of each item he's buying, by weight in pounds, the price of the
// items per pound, and also inform him of the savings he's receiving from the store.
//
// !!! ALGEBRA HEAVY !!!
// Jimmy wants to buy and sell some metal. If he has two and a half pounds he can smelt it into an ingot and sell back the metal
// for triple the profit. Any metal he has, he can sell back for a thirty percent loss. Jimmy will always make an ingot if he can,
// and will sell all of the metal he has, ingot or not. The metal Jimmy wants to smelt is priced at fifteen dollars per eight
// ounces. Alert Jimmy with how much money he's made from selling the metal, as well as how much of it, by pounds, he was forced
// to sell at a loss, and how many ingots he was able to sell.
//
// Georgia wants to run a marathon. She is able to run at a speed of 10.75 km/hr for an hour, but her speed decreases by half of
// a mile per hour every forty-five minutes. Georgia will only ever run as slow as 1 km/hr. How long will it take for Gerogia to
// finish her race? Return an alert saying how many hours it will take for Georgia to complete her run for a given distance, in
// miles.


})();