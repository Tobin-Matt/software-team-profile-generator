# Team Profile Generator

## Description
This application's functionality is to allow a user to input information about their team of employees inside the terminal command line and a HTMl page will be generated with this information.  

## Installation & Usage
To isntall the application follow the steps below:
* Clone the repository into desired directory on your local machine.
* Install the npm packages by running the "npm install" command in the directory terminal.

Below are the steps to run the application:
* To invoke the application the user must be in the root directory and run the command "node index.js" or "node .".
* The application will then prompt the user to input the information about the Manager of the team.
* After all prompts are answered for the Manager the user will be given the option to add an Engineer, Inter or no additional members to their team.
* Once all members have been added to the team and the user selects the option of "No additional members to add" then a message will display in the console stating "HTML page generated!".
* To view the newly created HTML page, open the "dist" folder and select the "index.html" page to be opened in the default browser.

## Technologies & Code Description
This application used several technologies and npm packages:
* Javascript
* HTML
* node.js
* Jest
* Inquirer

All of the functionality of the code was written in Javascript. The HTML file was written to test the appearance of the page that would be generated. In order to ensure our code functioned properly tests were created for all classes. To run these tests the npm package "jest" was installed. In order to provide questions to the user the npm package "inquirer" was installed.
  
To run the tests using Jest the user must use the terminal command of "npm run test". Jest will then run each file containing ".test.js". If the code functions properly then it should show in the terminal that all tests "PASS". If the code does not function properly then the terminal will show "FAIL" and point to which file failed and why.

## Video Walkthrough
Below is a video demonstrating the functionality of the application. 
* First, all tests are ran to show they pass.
* Next the application is invoked using "node index.js" or "node ."
* Responses are added to the prompts.
* HTML page is generated and opened in the browser.
* Demonstrate the email and GitHub links work.

https://drive.google.com/file/d/1iuJ1WnVdItMP16yP1qRByr9iYz9tQelW/view

## Project URLs
* GitHub Repo URL: https://github.com/Tobin-Matt/software-team-profile-generator