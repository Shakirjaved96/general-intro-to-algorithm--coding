#! /usr/bin/env node
// Q1: Write a program that checks whether the given number is positive or negative.
import inquirer from "inquirer";
import chalk from "chalk";
// welcome message
console.log(chalk.bold("\n\n<================THIS PROGRAM CHECKS WHETHER THE GIVEN NUMBER IS POSITIVE OR NEGATIVE================>"));
//store user input into a varaible
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "num",
        message: "Enter a number",
    },
]);
// use conditional statement
if (answer.num >= 0) {
    console.log(chalk.yellow(`\nThe value "${answer.num}" is positive.`));
}
else {
    console.log(chalk.red(`\nThe value "${answer.num}" is negative.`));
}
//End message
console.log(chalk.red("\n\n<===============================================THE END==============================================>"));
