#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 80000; //Dollar
let myPin = 1234;
console.log(chalk.green("\n\tWellcome to NIMRA KHAN ATM_MACHINE\n"));
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellow("Enter your pin code:"),
        type: "number",
    }
]);
if (pinanswer.pin === myPin) {
    console.log(chalk.blue("\n \tPin is Correct, Login Successfully\n"));
    let operationanswer = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.yellow("select an Operation:"),
            type: "list",
            choices: ["Withdraw Amount", "Check Balance"],
        }
    ]);
    if (operationanswer.operation === "Withdraw Amount") {
        let withdrawanswer = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Choose withdrawl method",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawanswer.withdrawMethod === "Fast Cash") {
            let Fastcashanswer = await inquirer.prompt([
                {
                    name: "FastCash",
                    type: "list",
                    message: "select Amount",
                    choices: [10000, 20000, 35000, 40000, 50000, 70000, 80000, 90000, 100000]
                }
            ]);
            if (Fastcashanswer.FastCash > myBalance) {
                console.log(chalk.green("Insufficient Balance"));
            }
            else {
                myBalance -= Fastcashanswer.FastCash;
                console.log(`${Fastcashanswer.FastCash} withdraw successfully`);
                console.log(`Your remaining Balance is: ${myBalance}`);
            }
        }
        else if (withdrawanswer.withdrawMethod === "Enter Amount") {
            let amountanswer = await inquirer.prompt([
                {
                    name: "Amount",
                    message: "Enter your amount to withdraw",
                    type: "number"
                }
            ]);
            if (amountanswer.Amount > myBalance) {
                console.log(chalk.green("Insufficient Balance"));
            }
            else {
                myBalance -= amountanswer.Amount;
                console.log(`${amountanswer.Amount} withdraw Successfully`);
                console.log(`Your Remaining Balance is ${myBalance}`);
            }
        }
    }
    else if (operationanswer.operation === "Check Balance") {
        console.log(`Your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log(chalk.red("Incorrect pin code! Try again"));
}
