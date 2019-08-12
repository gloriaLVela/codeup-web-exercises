(function () {

    "use strict";

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     */

    function numType(num) {
        return (num % 2 === 0) ? 'The number ' + num + ' is even' : 'The number ' + num + ' is odd';
    }

// console.log(10, numType(10));
// console.log(9, numType(9));

    function numPlus100(num) {
        return 'The number ' + num + ' plus 100 is ' + (num + 100);
    }

// console.log(5, numPlus100(5));
// console.log(-5, numPlus100(-5));

    function signNum(num) {
        return (num > 0) ? 'The number ' + num + ' is positive' : 'The number ' + num + ' is negative';
    }

//
// console.log(0, signNum(9));
// console.log(-15, signNum(-15));

    function workNumber() {
        if (window.confirm('Do you want to enter a number?')) {
            var num1 = prompt("Please enter a number");
            if (isNaN(num1)) {
                alert(num1 + ' is not a number');
            } else {
                var num2 =parseFloat(num1);
                // Odd or even?
                alert(numType(num2));
                // Number + 100
                alert(numPlus100(num2));
                // Positive or negative
                alert(signNum(num2));
            }

        } else {
            alert('Have a nice day!');
        }

    }

    workNumber();


    /***
     * THis is
     *
     */

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined above, if the color passed is not
     * one of the ones defined above, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */'blue'

    function analyzeColor(colorName) {
        var message = "";
        if (colorName === 'blue') {
            message = "blue is the color of the sky";
        } else if (colorName === 'red') {
            message = "Strawberries are red";
        } else if (colorName === 'cyan') {
            message = "I don't know anything about cyan";
        } else {
            message = "we should add the color " + colorName + " to the list";

        }

        return message;
    }

    console.log(('color analyzer with if else'));

    console.log('blue', analyzeColor('blue'));
    console.log('red', analyzeColor('red'));
    console.log('cyan', analyzeColor('cyan'));
    console.log('green', analyzeColor('green'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message everytime you refresh the page
     */

    console.log(('Color Analyzer with random'));
    console.log(randomColor, analyzeColor(randomColor));

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */

    function analyzeColor(colorName) {
        var message = "";
        switch (colorName) {
            case "blue":
                message = "blue is the color of the sky";
                break;
            case "red":
                message = "Strawberries are red";
                break;
            case "cyan":
                message = "I don't know anything about cyan";
                break;
            default:
                message = "we should add the color " + colorName + " to the list";
                break;
        }

        return message;
    }

    console.log(('color analyzer with switch'));

    console.log(randomColor, analyzeColor(randomColor));

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    function analyzeColor(colorName) {
        var message = "";
        switch (colorName) {
            case "blue":
                message = "blue is the color of the sky";
                break;
            case "red":
                message = "Strawberries are red";
                break;
            case "cyan":
                message = "I don't know anything about cyan";
                break;
            default:
                message = "we should add the color " + colorName + " to the list";
                break;
        }

        return message;
    }

    console.log(('color analyzer with prompt'));

    var answer = prompt('Please enter a color');
    console.log(analyzeColor(answer.toLowerCase()));

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);

    function calculateTotal(luckyNumber, totalAmount) {

        var discountAmount = 0;

        switch (luckyNumber) {
            case 0:
                discountAmount = 0;
                break;
            case 1:
                discountAmount = totalAmount * .10;
                break;
            case 2:
                discountAmount = totalAmount * .25;
                break;
            case 3:
                discountAmount = totalAmount * .35;
                break;
            case 4:
                discountAmount = totalAmount * .50;
                break;
            case 5:
                discountAmount = totalAmount;
                break;
            default:
                discountAmount = 0;
        }
        return totalAmount - discountAmount;
    }

    console.log(calculateTotal(4, 100), 50); // returns 50
    console.log(calculateTotal(0, 100), 100); // returns 100
    console.log(calculateTotal(5, 100), 0); // returns 0
    var amount = +prompt("Please enter the total amount");
    console.log(calculateTotal(luckyNumber, amount), ' ', amount, ' ', luckyNumber);


})();