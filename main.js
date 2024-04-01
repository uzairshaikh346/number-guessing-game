#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 6 + 1);
let userNum = await inquirer.prompt([{
        name: "guessNum",
        type: "number",
        message: "Guess a number between 1-6"
    }]);
if (userNum.guessNum === randomNumber) {
    console.log("congratulation, you enter the right number");
}
else
    (console.log("Sorry you enter wrong number"));
