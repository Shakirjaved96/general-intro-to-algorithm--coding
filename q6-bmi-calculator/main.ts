#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// Q6: Write a program that calculates the Body Mass Index (BMI) and categorizes it.

// welcome message
console.log(chalk.bold.yellow(
"\n\n<===============================THIS IS A BODY MASS INDEX (BMI) CALCULATOR===========================>"));

let bmi = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter Your Name: ",
    },
    {
        type: "input",
        name: "weight",
        message: "Enter Your Weight (In Kg): ",
    },
    {
        type: "input",
        name: "height",
        message: "Enter Your Height (In Meters): ",
    },
])
 // using mathematical operation
 let bmiAnswer = bmi.weight / (bmi.height * bmi.height);
console.log(`\n${bmi.name}! Your BMI Is ${bmiAnswer.toFixed(2)}. `);

// use conditional statement
    if (bmiAnswer < 18.5) {
        console.log(chalk.bold.red(`${bmi.name} Is UnderWeight."`));    
    } else if (bmi >= 18.5 && bmi < 25) {
        console.log(chalk.bold.green(`${bmi.name} Is Normal."`));
    } else if (bmi >= 25 && bmi < 30) {
        console.log(chalk.bold.yellow(`${bmi.name} Is OverWeight."`));
    } else {
        console.log(chalk.bold.red(`${bmi.name} Is Suffering from Obesity."`));
    }

//End message
console.log(chalk.yellowBright(
    "\n\n<===============================================THE END==============================================>"
));
