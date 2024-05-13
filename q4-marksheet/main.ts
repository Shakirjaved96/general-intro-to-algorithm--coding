import inquirer from "inquirer";
import chalk from "chalk";
import { escape } from "querystring";

// Q4: Create a program to check a student's grade and percentage.

// welcome message
console.log(chalk.bold.yellow(
    "\n\n<===========================THIS PROGRAM CHECKS STUDENT'S GRADE AND PERCENTAGE=======================>"));

    let subject = await inquirer.prompt([
        {
            type: "number",
            name: "English",
            message: "Enter marks of English: ",
},
{
    type: "number",
    name: "Math",
    message: "Enter marks of Math: ",
},
{
    type: "number",
    name: "Islamiat",
    message: "Enter marks of Islamiat: ",
},
{
    type: "number",
    name: "Urdu",
    message: "Enter marks of Urdu: ",
},
{
    type: "number",
    name: "Sindhi",
    message: "Enter marks of Sindhi: "
},
{
    type: "number",
    name: "Science",
    message: "Enter marks of Science: " 
},
])

let totalMarks = 
subject.English + subject.Math + subject.Islamiat + subject.Urdu + subject.Sindhi + subject.Science;
let percentage = totalMarks / 6;
console.log(
    `\nTotal Marks= ${totalMarks}. \nPercentage= ${percentage.toFixed(1)}%`
);

// use conditional statement
if (percentage > 80) {
    console.log(`Student Grade Is "A1."`);
    } else if (percentage > 70) {
        console.log(`Student Grade Is "A."`);
    } else if (percentage > 60){
        console.log(`Student Grade Is "B."`);
    } else if (percentage >50){
        console.log(`Student Grade Is "C."`);
    } else if (percentage > 40){
        console.log(`Student Grade Is "D."`);
    } else {
        console.log(`You Are fail`);
    }
    
    //End message
console.log(chalk.yellowBright(
    "\n\n<===============================================THE END==============================================>"
  ));
    
