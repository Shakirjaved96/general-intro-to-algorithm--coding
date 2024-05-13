import inquirer from "inquirer";
import chalk from "chalk";

// Q2: Write a program that checks if a number is even or odd.

// welcome message
console.log(chalk.bold.yellow(
    "\n\n<=====================THIS PROGRAM CHECKS WHETHER THE GIVEN NUMBER IS EVEN OR ODD====================>"
));

  //store user input into a varaible
let answer  = await inquirer.prompt ([
    {
        name: "num",
        type: "number",
        message: "Enter a number: "
},
]);

// use conditional statement
if (answer.num % 2 == 0) {
    console.log (chalk.blueBright(`\nThe number "${answer.num}" is even.`));
} else {
    console.log(chalk.green(`\nThe number "${answer.num}" is odd.`));
}

//End message
console.log(chalk.yellowBright(
    "\n\n<===============================================THE END==============================================>"
  ));
