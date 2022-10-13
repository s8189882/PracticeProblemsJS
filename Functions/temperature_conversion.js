// Help user find degF or degC based on their Conversion Selection. 
// Use Case Statement and ensure that the inputs are within the Freezing Point ( 0 °C / 32 °F ) 
// and the Boiling Point of Water ( 100 °C / 212 °F )
// a. degF = (degC * 9/5) + 32
// b. degC = (degF – 32) * 5/9

const prompt = require("prompt-sync")();

function CelsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9 / 5) + 32);
}

function FahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
}

function userChoice() {

    console.log('1-Fahrenheit to Celsius \n2-Celsius to Fahrenheit\n');
    let choice = parseInt(prompt());
    switch (choice) {

        case 1:
            let fahrenheit = prompt("Enter degree in Fahrenheit: ");
            if (!(fahrenheit >= 32 && fahrenheit <= 212)) {
                console.log("The Enter degree Should be in range 32 to 212");
                return;
            }
            var result = FahrenheitToCelsius(fahrenheit);
            console.log("Fahrenheit To Celusis Temperature : " + result);
            break;

        case 2:
            let celsius = prompt("Enter degree in Celsius : ");
            if (!(celsius >= 0 && celsius <= 100)) {
                console.log("The Enter degree Should be in range 0 to 100");
                return;
            }
            var result = CelsiusToFahrenheit(celsius);
            console.log("Celusis To Fahrenheit Temperature : " + result);
            break;

        default:
            console.log("Enter a valid input");
            break;
    }
}

userChoice();