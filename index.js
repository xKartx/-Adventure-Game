/*********************************************************************
* Author: Raymond Marx
* Date: 20240130
* Description: Example Javascript program treasure hunt
* Version: 0.0.1
* Usage: node index.js
* TODO:
*        - remove double code
**********************************************************************/
// CommonJS require
// require includes extra code
const readline = require('readline');
// Using the readline createInterface
// https://nodejs.org/api/readline.html
const inquirer = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create constant win, a nice string to show when user wins
// Concatinate with + sign
// \n is an enter
const win =  "      ___________\n"                    +
                "     '._==_==_=_.'\n"                            +
                "     .-\\:      /-.\n"                            +
                "    | (|:.     |) |\n"                            +
                "     '-|:.     |-' \n"                            +
                "       \\::.    /\n"                                +
                "        '::. .'\n"                                    +
                "          ) (\n"                                        +
                "        _.' '._\n"                                    +
                "       `\"\"\"\"\"\"\"`\n";

// Nice intro screen for the game
// printf output a formatted string.
console.log("Welcome to the treasure hunt game!\n");
console.log("      _______");
console.log( "     //  $$ /|");
console.log("    // $$  / |");
console.log("   //_____/  |");
console.log("  |          |");
console.log("  |   __   |");
console.log("  |  |__|  |");
console.log("  |________|\n\n");

// Question 1
console.log("You find yourself standing at the edge of the jungle, with two paths ahead of you:");
console.log("Option 1. This path leads through a dense thicket of thorns");
console.log("Option 2. This path seems to be clear and well - trodden");

// Collect answer
// userChoice => {} is a callback function
inquirer.question("Please make your choice 1 or 2:", userChoice => {

    // Check the choice of the user: Option 1
    // So comparing is done with ==
    // Declaring a variable is done with 1 =
    if (userChoice == 1) {
        console.log("You push your way through the thicket, enduring scratches and cuts along the way. Eventually, you emerge into a clearing and find a hidden cave. \n");
        console.log("Option 1. Do you enter the cave?");
        console.log("Option 2. Do you continue on the path?");
        // Collect answer (again a callback function)
        inquirer.question("Please make your choice 1 or 2:", userChoice => {
            // Option 1 --> show winning
            if (userChoice == 1) {
                console.log("You found the chest!!!\n");
                console.log(win);
            }

            // Option 2
            // TODO this code is double
            if (userChoice == 2) {
                console.log("You follow the well-trodden path and come across a river. Do you attempt to cross the river or look for a different route? \n");
                console.log("Option 1. You attempt to cross the river?");
                console.log("Option 2. Loof for a different route?");
                // Collect answer
                inquirer.question("", userChoice => {

                    // Option 1 end game
                    if (userChoice == 1) {
                        console.log("You could not cross the river.. THE END ");
                    }
                    // Option 2 end game
                    if (userChoice == 2) {
                        console.log("After years searching you did not find the treasure chest... THE END");
                    }
                });
            } // End double code Option 2
        });
    }

    // Option 2
    if (userChoice == 2) {
        console.log("You follow the well-trodden path and come across a river. Do you attempt to cross the river or look for a different route? \n\n");
        console.log("Option 1. You attempt to cross the river?\n");
        console.log("Option 2. Loof for a different route?\n");
        // Collect answer
        inquirer.question("", userChoice => {

            // Option 1 end game
            if (userChoice == 1) {
                console.log("You could not cross the river.. THE END ");
            }
            // Option 2 end game
            if (userChoice == 2) {
                console.log("After years searching you did not find the treasure chest... THE END");
            }
        });
    } // End Option 2
}); // End