const inquirer = require('inquirer');
const fs = require('fs');

const createHtml = ({name, id, email, github}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>Team Page</title>
</head>
<body>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Team Page</span>
        </div>
      </nav>

    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${id}</li>
          <li class="list-group-item">
            <a href="#" class="card-link">${email}</a>
          </li>
          <li class="list-group-item">
            <a href="https://github.com/${github}" class="card-link">${github}</a>
          </li>
        </ul>
      </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>`

// functions below are to run the menu prompt from inquirer
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
        message: 'What is their GitHub profile username?',
        name: 'github',
    },

    // {
    //     type: 'list',
    //     message: 'Would you like to add an engineer, or intern to the teams list?',
    //     name: 'menu',
    //     choices: ['Engineer', 'Intern'],
    // }
])
.then((answers) => {
    const htmlContent = createHtml(answers);

    fs.writeFile('./dist/index.html', htmlContent, (err) => 
    err ? console.log(err) : console.log('HTML page created!')
    );
});

//will need an empty array for Manager, Engineer, and Intern
//the prompts answered by the user will push to those arrays
//I will want to loop over those arrays and 