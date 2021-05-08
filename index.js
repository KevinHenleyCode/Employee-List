// brings in all of the needed packages
const { isNumber, toNumber } = require('lodash');
const inquirer = require('inquirer');
const fs = require('fs');


// creates a constructor class
class Employee {
    constructor(name, id, email, extra){
        this.name = name;
        this.id = id;
        this.email = email;
        this.extra = extra;
    }
}


// contains all of the objects used in prompt
let manager = [
{
    type: 'input',
    name: 'managerName',
    message: "Enter manager's name",
},
{
    type: 'number',
    name: 'managerId',
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
    name: 'managerEmail',
    message: 'Employee email?'
},
{
    type: 'number',
    name: 'managerOffice',
    message: 'Office number?',
    validate: (val) => {
        if (val === toNumber(val)) {
            return true;
        }
        return 'need a number'
    }
}
]
let engineer = [
{
    type: 'input',
    name: 'engineerName',
    message: 'Employee name?',
},
{
    type: 'number',
    name: 'engineerId',
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
    name: 'engineerEmail',
    message: 'Employee email?'
},
{
    type: 'input',
    name: 'engineerGithub',
    message: 'GitHub username:'
}
]
let intern = [
{
    type: 'input',
    name: 'internName',
    message: 'Employee name?',
},
{
    type: 'number',
    name: 'internId',
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
    name: 'internEmail',
    message: 'Employee email?'
},
{
    type: 'input',
    name: 'internSchool',
    message: 'What school do you attend?'
}
]


// contains the string literal that is added to the html
const htmlContent = (userInput, Manager, Engineer, Intern) =>
    `
    <!DOCTYPE html>
    <lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style/style.css">
        <title>Employee List</title>
    </head>

    <body>

        <header>
            <h1>My Team</h1>
        </header>

        <div class="employees">
            <div class="card">
                <div>
                    <h2>${userInput.managerName}</h2>
                    <h3>Manager</h3>
                </div>
                <ul>
                    <li>ID: ${userInput.managerId}</li>
                    <li>Email: <a href="${userInput.managerEmail}">${userInput.managerEmail}</a></li>
                    <li>Office Number: ${userInput.managerOffice}</li>
                </ul>
            </div>
            <div class="card">
                <div>
                    <h2>${userInput.engineerName}</h2>
                    <h3>Engineer</h3>
                </div>
                <ul>
                    <li>ID: ${userInput.engineerId}</li>
                    <li>Email: <a href="${userInput.engineerEmail}">${userInput.engineerEmail}</a></li>
                    <li>GitHub: <a href="https://github.com/${userInput.engineerGithub}">https://github.com/${userInput.engineerGithub}</a></li>
                </ul>
            </div>
            <div class="card">
                <div>
                    <h2>${userInput.internName}</h2>
                    <h3>Intern</h3>
                </div>
                <ul>
                    <li>ID: ${userInput.internId}</li>
                    <li>Email: <a href="${userInput.internEmail}">${userInput.internEmail}</a></li>
                    <li>School: ${userInput.internSchool}</li>
                </ul>
            </div>
        </div>

    </body>

    </html>
    `;


// runs the main function that contains the prompt
function ask() {


    // starts the prompt
    inquirer.prompt([

        {
            type: 'list',
            name: 'start',
            message: "Welcome to the employee entrey terminal. Please press start to begin.",
            choices: ['Start']
        }

        // takes the user input
    ]).then((userInput) => {

        // if Start is returned then calls ask2
        if (userInput.start == 'Start') {
            ask2(userInput)
        }

        const htmlFile = htmlContent(userInput);

    })
}


// calls the ask function
ask()


// creates the function ask 2 which contains the second prompt
const ask2 = (userInput) => {

    inquirer.prompt([

        // uses the spread operator to add the objects into the prompt
        ...manager,
        ...engineer,
        ...intern

    ]).then((userInput) => {

        // creates sub classes to contain the user input
        var Manager = new Employee(userInput.managerName, userInput.managerId, userInput.managerEmail, userInput.managerOffice)
        var Engineer = new Employee(userInput.engineerName, userInput.engineerId, userInput.engineerEmail, userInput.engineerGithub)
        var Intern = new Employee(userInput.internName, userInput.internId, userInput.internEmail, userInput.internSchool)
        

        const htmlFile = htmlContent(userInput, Manager, Engineer, Intern);
            
            // writes the user input to the string literal and creates the html file
            fs.writeFile('index.html', htmlFile, (error) =>
                error ? console.log(error) : console.log(`Your html is ready!`));

    })
}