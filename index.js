/**
 * List prompt example
 */

// 'use strict';
const { isNumber, toNumber } = require('lodash');
// const { Timestamp } = require('rxjs/internal/operators/timestamp');
const inquirer = require('inquirer');
// let repeat = true
const fs = require('fs');


const htmlContent = (userInput) =>

    ``;




let workers = ['Manager', 'Engineer', 'Intern']
let list1 = [{

    type: 'list',
    name: 'employee',
    message: 'Employee select',
    choices: workers,
    function: test = (val) => {
        console.log(val)
    }
},
{
    type: 'input',
    name: 'name',
    message: 'Employee name?',
    filter: (val) => {
        return val.toLowerCase();
        if (1 === 1) {

        }
    },
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
            console.log('hello bob');
            return true;
        }
    }
},
]


let manage = 0

function ask() {


    inquirer.prompt([
        list1[0],
        {
            type: 'list',
            name: 'repeat',
            message: 'Finish building team?',
            choices: ['yes', 'no']
        },
    ])
        .then((userInput) => {

            const htmlFile = htmlContent(userInput);

            if (userInput.employee == 'Manager') {
                workers.splice(0, 1)
                // return manage = 1

            }

            if (userInput.repeat == 'no') {
                ask()
            } else {

                fs.writeFile('index.html', htmlFile, (error) =>
                    error ? console.log(error) : console.log(`Your html is ready!${JSON.stringify(userInput)}`));
            }
        })
}
ask()