const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const rolePrompt = [
  {
    type: 'list',
    name: 'role',
    message: 'What type of employee would you like to add to your team?',
    choices: [
      'Manager',
      'Engineer',
      'Intern',
      "I don't need to add anymore employees"
    ],
  }
];

function initPrompt() {
  inquirer
    .prompt(rolePrompt)
    .then(
      data => {questionJunction(data)}
    );
};

function questionJunction(data) {
  // const role = data.role;
  switch (data.role) {
    case 'Manager':
      console.log('you chose Manager');
      pushAndReset();
      break;
    case 'Engineer':
      console.log('you chose Engineer');
      pushAndReset();
      break;
    case 'Intern':
      console.log('you chose Intern');
      pushAndReset();
      break;
    default:
      console.log('You are done!');
      break;
  };
};

function pushAndReset() {
  initPrompt();
};

initPrompt();