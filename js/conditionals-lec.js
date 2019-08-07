// (function () {

    "use strict";

    function weatherApp(weather) {
        if (weather === "rainy") {


        }
        return 1;
    }

    function gameOver(numberLives) {
        if (numberLives === 0) {
            alert('Game over!')
        }
        return 1;
    }

    function orderPizza(foodAvailable) {
        if (!foodAvailable) {
            console.log(("order pizza"));
        } else {
            console.log(("reheat food"));
        }
    }

    function trafficLight(color) {
        // if (color === "green") {
        //     return  "keep going";
        // } else if (color === "yellow") {
        //     return ("prepare to stop");
        // } else  {
        //     return ("stop");
        // }
        // return 1;

        switch(color) {
            case "green":
                alert("Keep going!");
                break;
            case "yellow":
                alert("Prepare to stop.");
                break;
            default:
                alert("Stop!");
                break;
        }
        return 1;
    }

    console.log(trafficLight("red"));
    console.log(trafficLight("yellow"));
    console.log(trafficLight("green"));


// })();