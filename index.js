// This section includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// These are the question for the application formatted in an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your full name?',
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email for further questions about your project?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Describe your proejct:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation instruction for your project: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how the usage guideline for your project: ',
    },
    {
        type: 'confirm',
        name: 'confirmlicense',
        message: 'Would you like to add a license to your project?',
        default: false,
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select which license that applies to your project: ',
        choices: ['MIT','GNU_AGPLv3','Mozilla_Public_License_2.0'],
        when: ({confirmlicense}) => {
            if (confirmlicense) {
            return true;
        } else {
            return false;
        }}
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Describe the contribution guideline for your project: ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Describe the testing procedure for your project: ',
    },    
];

// This is the initial function to initialize app and also waiting for the responses from the inquirer and writes the README.md file
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readMeInfo =  generateMarkdown(answers);
        // This section writes the README file and can console log any errors that may occur 
        fs.writeFile('README.md',readMeInfo, (err) =>
        err? console.log(err) : console.log("Sucessfully added README.md file!!")
        );
    });
};

// Function call to initialize app at start 
init();
