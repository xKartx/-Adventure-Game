/*********************************************************************
* Auteur: Konrad Sawicki
* Datum: 2024-01-30
* Beschrijving: Voorbeeld van een simpel Javascript avontuur
* Versie: 0.0.1
* Gebruik: node index.js
*********************************************************************/


const readline = require('readline');


const inquirer = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


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


console.log("Welkom bij het avontuur!\n");
console.log("      _______");
console.log( "     //  $$ /|");
console.log("    // $$  / |");
console.log("   //_____/  |");
console.log("  |          |");
console.log("  |   __   |");
console.log("  |  |__|  |");
console.log("  |________|\n\n");


console.log("Je staat aan de rand van een oud bos, voor je zie je twee paden:");
console.log("Optie 1. Dit pad gaat door een dicht doornbos");
console.log("Optie 2. Dit pad is duidelijk en goed belopen");


inquirer.question("Kies 1 of 2:", userChoice => {

    // Controleer de keuze van de gebruiker: Optie 1
    if (userChoice == 1) {
        console.log("Je duwt je door het doornbos, met veel krassen en schrammen. Uiteindelijk kom je in een open plek en zie je een oude ruïne.\n");
        console.log("Optie 1. Ga je de ruïne binnen?");
        console.log("Optie 2. Ga je verder het pad volgen?");
        
        // Verzamel het antwoord opnieuw
        inquirer.question("Kies 1 of 2:", userChoice => {
            // Optie 1 --> je hebt een verloren artefact gevonden!
            if (userChoice == 1) {
                console.log("Je hebt het verloren artefact gevonden!!!\n");
                console.log(win);
            }

           
            if (userChoice == 2) {
                console.log("Je volgt het pad verder en komt bij een rivier. Ga je proberen de rivier over te steken of zoek je een ander pad? \n");
                console.log("Optie 1. Probeer je de rivier over te steken?");
                console.log("Optie 2. Zoek je een ander pad?");
               
                inquirer.question("", userChoice => {

                   
                    if (userChoice == 1) {
                        console.log("Je kunt de rivier niet oversteken.. Einde van het spel.");
                    }
                  
                    if (userChoice == 2) {
                        console.log("Na jaren zoeken heb je het artefact niet gevonden... Einde van het spel.");
                    }
                });
            }
        });
    }

   
    if (userChoice == 2) {
        console.log("Je volgt het pad verder en komt bij een rivier. Ga je proberen de rivier over te steken of zoek je een ander pad? \n\n");
        console.log("Optie 1. Probeer je de rivier over te steken?");
        console.log("Optie 2. Zoek je een ander pad?\n");
        
        inquirer.question("", userChoice => {

            if (userChoice == 1) {
                console.log("Je kunt de rivier niet oversteken.. Einde van het spel.");
            }
            if (userChoice == 2) {
                console.log("Na jaren zoeken heb je het artefact niet gevonden... Einde van het spel.");
            }
        });
    } 
}); 
