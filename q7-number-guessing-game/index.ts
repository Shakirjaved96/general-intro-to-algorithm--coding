#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

// Q7: Write a simple number guessing game. Provide a selected number and a guess. Based on those numbers, give players clues if their guess is higher, lower, or correct.

// welcome message
console.log(chalk.bold.yellow(
    "\n\n<=====================================THIS IS A NUMBER GUESSING GAME=================================>"));


type ansType = {
    userGuess: number
} 

const systemGeneratedNo = Math.floor(Math.random() *10);


const answers: ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess"

    }
])
const {userGuess} = answers;

console.log(userGuess, "userGuess", systemGeneratedNo, 'SYs')
if(userGuess === systemGeneratedNo){
    console.log("yeaaaa Your answer is correct \n You Win!");
} else {
    console.log("Please try again later");

}


//End message
console.log(chalk.yellowBright(
    "\n\n<===============================================THE END==============================================>"
  ));
