#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation'
// import result from './oprations.js';

const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,2000);
    })
}


console.log(`
 ┬ ┬┌─┐┬  ┌─┐┌─┐┌┬┐┌─┐  ┌┬┐┌─┐  ╔═╗┬ ┬┌┬┐┌─┐┬─┐,┌─┐  ╔═╗┌─┐┬  ┌─┐┬ ┬┬  ┌─┐┌┬┐┌─┐┬─┐
 │││├┤ │  │  │ ││││├┤    │ │ │  ╠═╣├─┤│││├┤ ├┬┘ └─┐  ║  ├─┤│  │  │ ││  ├─┤ │ │ │├┬┘
 └┴┘└─┘┴─┘└─┘└─┘┴ ┴└─┘   ┴ └─┘  ╩ ╩┴ ┴┴ ┴└─┘┴└─ └─┘  ╚═╝┴ ┴┴─┘└─┘└─┘┴─┘┴ ┴ ┴ └─┘┴└─                    
`)
async function welcome() {
//     let rainbowtitle=chalkAnimation.rainbow(`
// ┬ ┬┌─┐┬  ┌─┐┌─┐┌┬┐┌─┐  ┌┬┐┌─┐  ╔═╗┬ ┬┌┬┐┌─┐┬─┐,┌─┐  ╔═╗┌─┐┬  ┌─┐┬ ┬┬  ┌─┐┌┬┐┌─┐┬─┐
// │││├┤ │  │  │ ││││├┤    │ │ │  ╠═╣├─┤│││├┤ ├┬┘ └─┐  ║  ├─┤│  │  │ ││  ├─┤ │ │ │├┬┘
// └┴┘└─┘┴─┘└─┘└─┘┴ ┴└─┘   ┴ └─┘  ╩ ╩┴ ┴┴ ┴└─┘┴└─ └─┘  ╚═╝┴ ┴┴─┘└─┘└─┘┴─┘┴ ┴ ┴ └─┘┴└─
//     `)
let rainbowtitle=chalkAnimation.rainbow(`


    `)
    await sleep()
    rainbowtitle.stop()
    console.log(`
    _____________________
    |  _________________  |
    | | JO  3.141592654 | |
    | |_________________| |
    |  __ __ __ __ __ __  |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`)
}




async function calculator() {
    let input = await inquirer.prompt([
        {
                 type: "list",
                name: "operator",
                choices: ['Addition (+)', 'Subtraction (-)', 'Multiplication (*)', 'Division (/)'],
                message: "Select Arithmetic Operator:",
            },
            {
                type: "number",
                name: "first_num",
                message: "Enter First Number:",
            },
            
            {
                type: "number",
                name: "secound_num",
                message: "Enter Secound Number:",
            },
        ]);

        
let first_num = input.first_num;
let secound_num = input.secound_num;
let operator = input.operator;
let result;
if (operator === 'Addition (+)') {
    result= first_num + secound_num;
}
else if (operator === 'Subtraction (-)') {
    result= first_num - secound_num;
}
else if (operator === 'Multiplication (*)') {
    result= first_num * secound_num;
}
else if (operator === 'Division (/)') {
    result= first_num / secound_num;
}


console.log("result",result)
}

await welcome()



async function runagain() {
    do {
        await calculator()
        var res=await inquirer.prompt([
            {
                     type: "input",
                    name: "input",
                    message: "For continue please type yes else no",
                },
           
            ]);
    } while (res.input=='y'||res.input=='Y'||res.input=='YES'||res.input=='yes');
} 

runagain()