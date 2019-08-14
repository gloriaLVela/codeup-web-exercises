(function () {

    "use strict";


    function showMultiplicationTable(input) {
        for (var i = 1; i <= 10; i++) {
            console.log(input + ' x ' + i + ' = ' + parseFloat(input) * i);
        }
    }

    showMultiplicationTable(5)
    showMultiplicationTable(7);

    function isOdd(num) {
        return num % 2 === 1;
    }


    var randomNumber; // = Math.floor(Math.random() * 200) + 20;

    for (var i = 0; i <= 10; i++) {
        randomNumber = Math.floor(Math.random() * 181) + 20;
        if (isOdd(randomNumber)) {
            console.log(randomNumber + " is odd");
        } else {
            console.log(randomNumber + " is even");
        }
    }

    var str = "";

    for (var i = 1; i < 10; i++) {
        for (var j = 0; j < i; j++) {
            str += i;
            //console.log(i);

        }
        console.log(str);
        str = "";
    }

    for (var i = 1; i <= 9; i++) {
        console.log(string(i).repeat(i));
    }

    for (var k = 100; k > 0; k -= 5) {
        console.log(k);
    }


})();
