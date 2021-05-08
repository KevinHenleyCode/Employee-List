/**
 * List prompt example
 */

// 'use strict';
const { isNumber, toNumber } = require('lodash');
// const { Timestamp } = require('rxjs/internal/operators/timestamp');
const inquirer = require('inquirer');
// let repeat = true
const fs = require('fs');

class Employee {
    constructor(name, id, email, extra){
        this.name = name;
        this.id = id;
        this.email = email;
        this.extra = extra;
    }
}



let info = []







let workers = ['Engineer', 'Intern','Finished']
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


// if (userInput.employee == 'Manager') {
//     console.log(list2[0]);
// }




const htmlContent = (userInput, Manager, Engineer, Intern) =>
    `
                <body>

    <header>
        <h1>My Team</h1>
    </header>

    <div class="employees">
        <div class="card">
            <h2>${userInput.managerName}</h2>
            <h3>Manager</h3>
            <ul>
                <li>ID: ${userInput.managerId}</li>
                <li><a href="${userInput.managerEmail}">${userInput.managerEmail}</a></li>
                <li>${userInput.managerOffice}</li>
            </ul>
        </div>
        <div class="card">
            <h2>${userInput.engineerName}</h2>
            <h3>Engineer</h3>
            <ul>
                <li>ID: ${userInput.engineerId}</li>
                <li><a href="${userInput.engineerEmail}">${userInput.engineerEmail}</a></li>
                <li><a href="https://github.com/${userInput.engineerGithub}">https://github.com/${userInput.engineerGithub}</a></li>
            </ul>
        </div>
        <div class="card">
            <h2>${userInput.internName}</h2>
            <h3>Intern</h3>
            <ul>
                <li>ID: ${userInput.internId}</li>
                <li><a href="${userInput.internEmail}">${userInput.internEmail}</a></li>
                <li>${userInput.internSchool}</li>
            </ul>
        </div>
    </div>

</body>

</html>
                `;


function ask() {


    inquirer.prompt([

        {
            type: 'list',
            name: 'start',
            message: "Welcome to the employee entrey terminal. Please press start to begin.",
            choices: ['Start']
        }


    ]).then((userInput) => {

        if (userInput.start == 'Start') {

            ask2(userInput)
            
        }

        const htmlFile = htmlContent(userInput);

        
    })
}


ask()

const ask2 = (userInput) => {

    inquirer.prompt([

        ...manager,
        ...engineer,
        ...intern

    ]).then((userInput) => {

        var Manager = new Employee(userInput.managerName, userInput.managerId, userInput.managerEmail, userInput.managerOffice)
        var Engineer = new Employee(userInput.engineerName, userInput.engineerId, userInput.engineerEmail, userInput.engineerGithub)
        var Intern = new Employee(userInput.internName, userInput.internId, userInput.internEmail, userInput.internSchool)
        

        const htmlFile = htmlContent(userInput, Manager, Engineer, Intern);



       
        globalThis.newManager = Manager
        globalThis.newEngineer = Engineer
        globalThis.newIntern = Intern

        // if (userInput.employee == 'Finished') {
         
            info.push(Manager, Engineer, Intern)
            
            
        console.log(`This is Manager: ${info[0].name} This is Engineer: ${info[1].name} This is Intern: ${info[2].name}`);

    

            fs.writeFile('index.html', htmlFile, (error) =>
                error ? console.log(error) : console.log(`Your html is ready!${JSON.stringify(userInput)}`));


           
        // }
       

    })

}

