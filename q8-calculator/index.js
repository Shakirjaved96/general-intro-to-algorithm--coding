#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Q8: Write a simple calculator program.
//    1. Addition
//    2. Subtraction
//    3. Multiplication
//    4. Division
// welcome message
console.log(chalk.bold.yellow("\n\n<======================================THIS IS A SIMPLE CALCULATOR===================================>\n"));
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly enter first no: "
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter second no: "
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "Select operator: "
    },
]);
const { numberOne, numberTwo, operator } = answer;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    console.log("Your result is :", result);
}
else {
    console.log("Kindly enter valid input");
}
//End message
console.log(chalk.yellowBright("\n\n<===============================================THE END==============================================>"));
