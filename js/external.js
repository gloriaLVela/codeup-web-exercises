"use strict";

console.log('Hello from external JavaScript!');

// 1. Use the alert function to show a message that says 'Welcome to my Website!'.
alert('Welcome to my Website!');

// 2. Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
var favoriteColor = prompt("What is your favorite color");

// For example, if the user enters "blue", your code should alert a message that says: "Great, blue is my favorite color too!"

if (favoriteColor === "blue") {
    alert("Great, blue is my favorite color too!")
} else {
    alert(favoriteColor + " is a nice color");
}


// 3. Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
//     When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.


// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
var littleMermaidDaysRented = Number(prompt('How many days did you rent the movie the little mermaid ?'));
var brotherBearDaysRented = Number(prompt('How many days did you rent the movie brother bear?'));
var herculesDaysRented = Number(prompt("How many days did you rent tne movie hercules?"));

var pricePerDayDollars = 3;

var rentalTotal = (littleMermaidDaysRented +
    brotherBearDaysRented +
    herculesDaysRented) *
    pricePerDayDollars;

alert(rentalTotal);

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;

var googleDaysWorked = Number(prompt('How many days did you work at google?'));
var amazonDaysWorked = Number(prompt("How many days did you work at amazon?"));
var facebookDaysWorked = Number(prompt("How many days did you work at facebook?"));

var totalPay = googleDaysWorked * googleRate + amazonDaysWorked * amazonRate + facebookDaysWorked * facebookRate;

alert("Total pay " + totalPay.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
var classFull = window.confirm("Is the class full?");
var scheduleConflict = window.confirm("Is there a schedule conflict?");
if (!classFull && !scheduleConflict) {
    alert('Congratulations! you are registered');
} else {
    alert('Sorry you are wait listed ');
}
// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

var totalItems = Number(prompt("Total items purchased"));
var offerValid = confirm("The offer is valid");
var premiumMember = confirm("Are you a premium member");

if (offerValid && (totalItems > 2 || premiumMember)) {
    alert('You get a discount!');
} else {
    alert('Sorry, no discount');
}
