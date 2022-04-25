// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const fileName = "README.md";
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "Enter Your Name"
  },
  
  {
      type: "input",
      name: "email",
      message: "Enter Your Email Address"
  },
  {
    type: "input",
    name: "username",
    message: "Enter Your Github Username"
  },
  {
    type: 'input',
        name: 'title',
        message: 'What is your project name?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project.'
  },
  {
    type: 'input',
        name: 'usage',
        message: 'How do you use this App.'
  },
  

  {
      type: "list",
      message: "Please select a type of License.",
      name: "license",
      choices: [
          "MIT",
          "Apache",
          "ISC",
          "GNU GPLv3"
      ]
  },
  
];

// function to write README file
function writeToFile(fileName, data) {
  // Create Markdown from data
  const markdown = generateMarkdown(data);
  // Write Markdown file
  fs.writeFile(fileName, markdown, function (err) {
      if (err) throw err;
      console.log("Your README has been successfully created!")
  });
}

// function to initialize program
function init() {
  // inquirer module
  inquirer
   .prompt(questions)
   .then(function(data) {
       writeToFile(fileName,data)
   })
}

// function call to initialize program
init();
