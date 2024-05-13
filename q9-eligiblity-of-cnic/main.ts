import inquirer from "inquirer";
import chalk from "chalk";

// Q9: Write a simple JavaScript program that checks if a person is eligible for a CNIC (show a message with the person's name).

// welcome message
console.log(chalk.bold.yellow(
    "\n\n<============================THIS PROGRAM CHECK'S ELIGIBILITY CRITERIA OF CNIC=======================>\n\n"));

    //store user input into a varaible
    let cnic = await inquirer.prompt([
        {
        name: "name",
        type: "input",
        message: "Enter Your Name: ",
    },
    {
        name: "age",
        type: "input",
        message: "Enter Your Age: ",
    },
]);


// use conditional statement
if (cnic.age >= 18) {
    console.log(`\n${cnic.name}! You Are Eligible For CNIC.`);
    } else {
        console.log(`\n${cnic.name}! You Are Not Eligible For CNIC.`);
    }

    //End message
console.log(chalk.yellowBright(
    "\n\n<===============================================THE END==============================================>"
));
