// TODO: Include packages needed for this application

const fs = require ('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [

    {
        type:'input',
        name: 'title',
        message: "What is the title of your project?",

    },
    {
        type:'input',
        name: 'description',
        message: "What is a description of your project?",

    },
   
    {
        type:'input',
        name: 'installation',
        message: "What are the installation instructions?",

    },
    {
        type:'input',
        name: 'usage',
        message: "How should users use your project?",

    },
    {
        type:'list',
        name: 'license',
        message: "What license is used for your project?",
        choices:["GNU", "GPL3", "ISC", "MIT", "APACHE2.0", "None"]

    },
    {
        type:'input',
        name: 'contribution',
        message: "How can others contribute to your project?",

    },
    {
        type:'input',
        name: 'test',
        message: "What tests are included with your project?",

    },
    {
        type:'input',
        name: 'github',
        message: "What is your GitHub username?",

    },
    {
        type:'input',
        name: 'email',
        message: "What is your email address?",

    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("./output/README.md", generateMarkdown({...answers}))
    })
}


// Function call to initialize app
init();
