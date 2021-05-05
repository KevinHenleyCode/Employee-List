const inquirer = require('inquirer');
const fs = require('fs');


// 
const htmlContent = (userInput) =>

    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employees</title>
</head>
<body>

    <ul>
        <li>Manager: ${userInput.manager}</li>
        <li>Engineer: ${userInput.engineer}</li>
        <li>Intern: ${userInput.intern}</li>
    </ul>

        <script src="index.js"></script>
</body>
</html>

    `;


// 
inquirer.prompt([
    // 
    {
        type: 'input',
        name: 'manager',
        message: "What is your manager's name?"
    },
    {
        type: 'input',
        name: 'engineer',
        message: "Enter your engineer's name."
    },
    {
        type: 'input',
        name: 'intern',
        message: "What's your intern's name?",
        choice: {
            type: 'input',
            name: 'id',
            message: 'Id number.'
            }
    },
])
    // 
    .then((userInput) => {

        const htmlFile = htmlContent(userInput);

        test(userInput)

        // 
        fs.writeFile('index.html', htmlFile, (error) =>
            error ? console.log(error) : console.log('Your html is ready!'));
    });

// const test =(userInput) => {
//     console.log(`this is the console log: ${userInput.manager}`);
// }
