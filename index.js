const { prompt } = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const util = require('util');

const questions = [
  {
    type: "input",
    message: "What is your Github username?",
    name: "username",
    default: "edsloane"
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    default: "edsloanephoto@gmail.com"
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a brief description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "Explain the installation process",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter the usage for your project",
    name: "usage",
  },
  {
    type: "list",
    message: "What is your license?",
    name: "license",
    choices: ["BSD 3", "APACHE 2.0", "MIT", "GPL 3.0", "None"],
    default: "APACHE 2.0"
  },
  {
    type: "input",
    message: "List the contributors here:",
    name: "contributor",
  },
  {
    type: "input",
    message: "How would you like people to test?",
    name: "test",
  }
];

async function template() {
  const reply = await prompt(questions);
  console.log(reply);
  write(reply);
}


function write(data) {
  const fields = `
# Title: ${data.title}

## Description:

  ${data.description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Installation:
${data.installation}

### Usage:
  ${data.usage}

### License:
${data.license}
![License Badge](https://img.shields.io/badge/license-${data.license[0]}-blue)

### Contributing:
${data.contributor}

### Tests:
${data.test}

### Questions:
Email: ${data.email} \n
[Github: ${data.username}](https://github.com/${data.username})
`

  fs.writeFile("README.md", fields, (err) => console.log(err || 'success!'))
  
};

template()