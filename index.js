const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//empty array to hold the employess that will be added to the page
const employeeArray = [];

// functions below are to run the menu prompt from inquirer
const initPrompts = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Managers name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is their Employee ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is their Email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is their office number?',
            name: 'officeNum',
        },
    ])
    .then((answers) => {
        //generate cards for manager
        // const htmlContent = createHtml(answers);
        const { name, id, email, officeNum } = answers;
        const manager = new Manager(name, id, email, officeNum);
        employeeArray.push(manager);
        console.log(employeeArray);
        addEmployees();
    });
}


let addEmployees = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What type of employee would you like to add to the team?',
            name: 'menu',
            choices: ['Engineer', 'Intern', 'No additional members to add.'],
        }
    ])
    .then((selection) => {
        switch(selection.menu) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;

            default: 'No additional members to add.'
                // createPage();
        }
    })
}

const promptEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Engineers name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is their Employee ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is their Email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is their GitHub username?',
            name: 'github',
        },
    ])
    .then((answers) => {
        //generate cards for engineer
        const { name, id, email, github } = answers;
        const engineer = new Engineer(name, id, email, github);
        employeeArray.push(engineer);
        addEmployees();
    });
}

const promptIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Interns name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is their Employee ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is their Email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What school did they attend or are currently attending?',
            name: 'school',
        },
    ])
    .then((answers) => {
        //generate cards for intern
        const { name, id, email, school } = answers;
        const intern = new Intern(name, id, email, school);
        employeeArray.push(intern);
        addEmployees();
    });
}

// const createPage = () => {
//     fs.writeFile('./dist/index.html', htmlContent, (err) => 
//     err ? console.log(err) : console.log('HTML page created!')
//     );
// }

initPrompts();

// const createHtml = ({name, id, email, github}) =>
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
//     <title>Team Page</title>
// </head>
// <body>
//     <nav class="navbar navbar-light bg-light">
//         <div class="container-fluid">
//           <span class="navbar-brand mb-0 h1">Team Page</span>
//         </div>
//       </nav>

//     <div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">${name}</h5>
//           <p class="card-text">Engineer</p>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">${id}</li>
//           <li class="list-group-item">
//             <a href="#" class="card-link">${email}</a>
//           </li>
//           <li class="list-group-item">
//             <a href="https://github.com/${github}" class="card-link">${github}</a>
//           </li>
//         </ul>
//       </div>

//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
// </body>
// </html>`