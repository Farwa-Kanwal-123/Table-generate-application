#! /usr/bin/env node
//import inquirer
import inquirer from "inquirer";
//import chalk
import chalk from "chalk";

console.log(chalk.bgMagentaBright("\n\t Welcome to Table Generate CLI app..\t\n") )
//declare variable
let myTable = true; 
//start with while loop
while(myTable){
const answers = await inquirer.prompt([
    {
        name: "answer",
        message : chalk.yellow("Write the table that you want to print: "),
        type : "number",
    }
]);
let myNumber = answers.answer;
//console.log(myNumber);
if(myNumber){
    console.log(chalk.greenBright(`Here is the table of ${myNumber}.`))
    
     for(let i = 1; i <= 10 ; i++){
        console.log(chalk.cyanBright(`${myNumber} X ${i} = ${myNumber * i}`));
     }
    }
    else{
        console.log(chalk.redBright("Enter input in numerical form."));
    }

    //asking users if he want to print table again

    let againPrint = await inquirer.prompt([
        {
            name : "askUser",
            type : "confirm",
            message : chalk.yellow("Do you want to print another table?"),
            default : false,
        }])
        if(againPrint.askUser == false){
           myTable = false;
           console.log(chalk.bgGreenBright(chalk.blackBright.bold("THANKS for using this app.GOOD BYE!!!")));
        }
}