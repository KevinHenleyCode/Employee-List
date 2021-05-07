/**
 * List prompt example
 */

// 'use strict';
const { isNumber, toNumber } = require('lodash');
// const { Timestamp } = require('rxjs/internal/operators/timestamp');
const inquirer = require('inquirer');
// let repeat = true
const fs = require('fs');

let info = []
const htmlContent = (userInput) =>

    ``;




let workers = ['Manager', 'Engineer', 'Intern']
let manager = [
{
    type: 'input',
    name: 'name',
    message: 'Employee name?',
},
{
    type: 'number',
    name: 'id',
    message: 'Employee id?',
    validate: (val) => {
        if (val === toNumber(val)) {
            return true;
        }
        return 'need a number'
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Employee email?',
    validate: (val) => {
        if (val == '@') {
            return true;
        }
    }
},
{
    type: 'number',
    name: 'officNumber',
    message: 'Office number?',
    validate: (val) => {
        if (val === toNumber(val)) {
            return true;
        }
        return 'need a number'
    }
},
{
    type: 'list',
    name: 'employee',
    message: 'Employee select',
    choices: workers
}
]
let engineer = [
{
    type: 'input',
    name: 'name',
    message: 'Employee name?',
},
{
    type: 'number',
    name: 'id',
    message: 'Employee id?',
    validate: (val) => {
        if (val === toNumber(val)) {
            return true;
        }
        return 'need a number'
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Employee email?',
    validate: (val) => {
        if (val == '@') {
            return true;
        }
    }
},
{
    type: 'input',
    name: 'github',
    message: 'GitHub username:'
},
{
    type: 'list',
    name: 'finished',
    message: 'Finish building team?',
    choices: ['yes', 'no']
},
{
        type: 'list',
        name: 'employee',
        message: 'Employee select',
        choices: workers
}
]
let intern = [
{
    type: 'input',
    name: 'name',
    message: 'Employee name?',
},
{
    type: 'number',
    name: 'id',
    message: 'Employee id?',
    validate: (val) => {
        if (val === toNumber(val)) {
            return true;
        }
        return 'need a number'
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Employee email?',
    validate: (val) => {
        if (val == '@') {
            return true;
        }
    }
},
{
    type: 'input',
    name: 'school',
    message: 'What school do you attend?'
},
{
    type: 'list',
    name: 'finished',
    message: 'Finish building team?',
    choices: ['yes', 'no']
},
{
        type: 'list',
        name: 'employee',
        message: 'Employee select',
        choices: workers
}
]




let choice = manager

// if (userInput.employee == 'Manager') {
//     console.log(list2[0]);
// }


function ask() {


    inquirer.prompt([

        {
            type: 'list',
            name: 'employee',
            message: 'Employee select',
            choices: workers
        }


    ]).then((userInput) => {

        if (userInput.employee == 'Manager') {

            workers.splice(0, 1)
            ask2(userInput)
            
        }

        const htmlFile = htmlContent(userInput);

        
    })
}


ask()

const ask2 = (userInput) => {

    inquirer.prompt([

        ...choice

    ]).then((userInput) => {

        if (userInput.employee == 'Engineer') {
            choice = engineer

        }
        if (userInput.employee == 'Intern') {
            choice = intern

        }

        const htmlFile = htmlContent(userInput);
        let manage = 0
        if (manage == 0) {

            workers.splice(0, 1)
            ask2()
            return manage = 1

        }

        if (userInput.finished == 'no') {

            ask2()
        } else {

            fs.writeFile('index.html', htmlFile, (error) =>
                error ? console.log(error) : console.log(`Your html is ready!${JSON.stringify(userInput)}`));
        }

    })

}

