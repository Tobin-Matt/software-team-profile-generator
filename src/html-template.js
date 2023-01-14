//parent function that holds the different dynamically generated employee cards
const generateTeam = (employees) => {
  const generateManager = (manager) => {
    return `
    <div class="card m-3 shadow-lg border border-dark" style="width: 18rem;">
      <div class="card-body bg-info">
        <h5 class="card-title">${manager.getName()}</h5>
        <p class="card-text">${manager.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">
        <span>Email: </span>
        <a href="mailto: ${manager.getEmail()}" class="card-link">${manager.getEmail()}</a>
        </li>
        <li class="list-group-item">
          <p class="card-link">Office Number: ${manager.getOfficeNumber()}</p>
        </li>
      </ul>
    </div>
    `
  }

  const generateEngineer = (engineer) => {
    return `
    <div class="card m-3 shadow-lg border border-dark" style="width: 18rem;">
      <div class="card-body bg-info">
        <h5 class="card-title">${engineer.getName()}</h5>
        <p class="card-text">${engineer.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">
          <span>Email: </span>
          <a href="mailto: ${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a>
        </li>
        <li class="list-group-item">
          <span>GitHub: </span>
          <a href="https://github.com/${engineer.getGithub()}" class="card-link">${engineer.getGithub()}</a>
        </li>
      </ul>
    </div>
    `
  }

  const generateIntern = (intern) => {
    return `
    <div class="card m-3 shadow-lg border border-dark" style="width: 18rem;">
      <div class="card-body bg-info">
        <h5 class="card-title">${intern.getName()}</h5>
        <p class="card-text">${intern.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">
          <span>Email: </span>
          <a href="mailto: ${intern.getEmail()}" class="card-link">${intern.getEmail()}</a>
        </li>
        <li class="list-group-item">
          <p class="card-link">School: ${intern.getSchool()}</p>
        </li>
      </ul>
    </div>
    `
  }

  //empty array to push each added employee card
  const cardsArray = [];

  //functional loops below will push a certain employee card based on the users input
  cardsArray.push(
    employees
    .filter((employee) => employee.getRole() === 'Manager')
    .map((manager) => generateManager(manager))
    );

  cardsArray.push(
    employees
    .filter((employee) => employee.getRole() === 'Engineer')
    .map((engineer) => generateEngineer(engineer)).join('')
    );

  cardsArray.push(
    employees
    .filter((employee) => employee.getRole() === 'Intern')
    .map((intern) => generateIntern(intern)).join('')
    );

  return cardsArray.join('')
}

//export the template literal that holds the html structure to create the page
module.exports = (employees) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
      <title>Team Page</title>
  </head>
  <body>
      <nav class="navbar navbar-light bg-dark mb-5">
          <div class="container-fluid d-flex justify-content-center">
            <span class="navbar-brand text-white m-4 fs-2 h1">Team Page</span>
          </div>
        </nav>
      
      <div class="d-flex justify-content-center flex-wrap">
        ${generateTeam(employees)}
      </div>
  
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  </body>
  </html>
  `
}