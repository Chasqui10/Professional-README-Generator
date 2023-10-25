// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
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
        choices: ['MIT','GNU AGPLv3','Mozilla Public License 2.0'],
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
        name: 'tests',
        message: 'Describe the testing procedure for your project: ',
    },    
];

// TODO: Create a function to write README file [Left off here]
//function writeToFile('READMEtest1.md', data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init();
