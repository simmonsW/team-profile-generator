const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const getHtml = require('./src/html_template');
const employeeArr = [];

const managerQuestionArr = [
  {
    type: 'input',
    name: 'name',
    message: "What is your manager's name?",
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the employee's name");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "what is your manager's employee id?",
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the employee's id");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your manager's email address?",
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the employee's email");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "What is your manager's office number?",
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the employee's email");
        return false;
      }
    }
  }
];

const engineerQuestionArr = [
  {
    type: 'input',
    name: 'name',
    message: "What is your engineer's name?",
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the employee's name");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "what is your engineer's employee id?",
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the employee's id");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your engineer's email address?",
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the employee's email");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: "What is your engineer's GitHub account?",
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the employee's GitHub name");
        return false;
      }
    }
  }
];

const internQuestionArr = [
  {
    type: 'input',
    name: 'name',
    message: "What is your intern's name?",
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the employee's name");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "what is your intern's employee id?",
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the employee's id");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your intern's email address?",
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the employee's email");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'school',
    message: "What is your intern's school?",
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the employee's school name");
        return false;
      }
    }
  }
];

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

      return inquirer
        .prompt(managerQuestionArr)
        .then(({ name, id, email, officeNumber }) => {
          const employee = new Manager(name, id, email, officeNumber);
          pushAndReset(employee);
        });

    case 'Engineer':

      return inquirer
        .prompt(engineerQuestionArr)
        .then(({ name, id, email, github }) => {
          const employee = new Engineer(name, id, email, github);
          pushAndReset(employee);
        });

    case 'Intern':

      return inquirer
        .prompt(internQuestionArr)
        .then(({ name, id, email, school }) => {
          const employee = new Intern(name, id, email, school);
          pushAndReset(employee);
        });

    default:
      // console.log(employeeArr);
      const htmlData = getHtml(employeeArr);
      fs.writeFile(path.join(__dirname, './dist/index.html'), htmlData, err => {
        if (err) {
          throw new Error(err);
        }
        console.log('You are done!')
      });
      break;
  };
};

function pushAndReset(data) {
  employeeArr.push(data);
  initPrompt();
};

initPrompt();