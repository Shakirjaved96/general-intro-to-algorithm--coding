#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Q5: Write a program that greets the user based on the time of day. Display "Good Morning," "Good Afternoon," or "Good Evening" based on the time of day when you run the code.
// welcome message
console.log(chalk.bold.yellow("\n\n<=====================================THIS PROGRAM GREETING'S YOU====================================>"));
const thisTime = new Date();
const theHour = thisTime.getHours();
//store user input into a varaible
let PersonName = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter your name: "
    },
]);
// use conditional statement
if (theHour >= 5 && theHour < 12) {
    console.log(`\nGood Morning! ${PersonName.name}.`);
}
else if (theHour >= 12 && theHour < 18) {
    console.log(`\nGood Afternoon! ${PersonName.name}.`);
}
else if (theHour >= 18 && theHour < 20) {
    console.log(`\nGood Evening! ${PersonName.name}.`);
}
else {
    console.log(`\nGood Night! ${PersonName.name}.`);
}
//End message
console.log(chalk.yellowBright("\n\n<===============================================THE END==============================================>"));
