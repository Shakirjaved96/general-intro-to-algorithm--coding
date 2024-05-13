#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Q3: Write a program to determine the greater of two numbers.
// welcome message
console.log(chalk.bold.yellow("\n\n<=======================THIS PROGRAM FINDS WHICH OF THE GIVEN NUMBER IS GREATEST=====================>"));
let answers = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter First Number: ",
    },
    {
        name: "num2",
        type: "number",
        message: "Enter Second Number: ",
    },
]);
// use conditional statement
if (answers.num1 > answers.num2) {
    console.log(chalk.red(`\nThe number "${answers.num1} is greatest number.`));
}
else {
    console.log(chalk.green(`\nThe number "${answers.num2} is greatest number.`));
}
//End message
console.log(chalk.yellowBright("\n\n<===============================================THE END==============================================>"));
