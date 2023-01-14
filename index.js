const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./src/html-template');

//empty array to hold the employess that will be added to the page
const employeeArray = [];

// will prompt user to add Manager info
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
        const { name, id, email, officeNum } = answers;
        const manager = new Manager(name, id, email, officeNum);
        employeeArray.push(manager);
        // console.log(employeeArray);

        // then run the menu to ask user to add Engineer or Intern
        addEmployees();
    });
}


const addEmployees = () => {
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
                createPage();
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
        // console.log(employeeArray);
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
        // console.log(employeeArray);
        addEmployees();
    });
}

const createPage = () => {
    fs.writeFile('./dist/index.html', generateHTML(employeeArray), (err) => 
    err ? console.log(err) : console.log('HTML page created!')
    );
}

initPrompts();