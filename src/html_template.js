function employeeCard(employee) {

  let roleEl;
  let newEl;

  switch (employee.getRole()) {
    case 'Manager':
      roleEl = `<i class="fas fa-mug-hot"></i>`;
      newEl = `office #: ${employee.getOfficeNumber()}`;
      break;
    case 'Engineer':
      roleEl = `<i class="fas fa-glasses"></i>`;
      newEl = `GitHub: <a href="http://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
      break;
    case 'Intern':
      roleEl = `<i class="fas fa-user-graduate"></i>`
      newEl = `School: ${employee.getSchool()}`;
      break;
  };

  return `
    <div class="col-4">
      <div class="card-title">
        <h2 class="name">${employee.getName()}</h2>
        <h3 class="role">${roleEl}${employee.getRole()}</h3>
      </div>
      <div class="card-detail">
        <ul>
          <li>
            <p class="id">
              ID: ${employee.getId()}
            </p>
          </li>
          <li>
            <p class="email">
              Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
            </p>
          </li>
          <li>
            <p class="new">
              ${newEl}
            </p>
          </li>
        </ul>
      </div>
    </div>
  `
}

function getHtml(employeeArr) {
  return `
    <DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>

      <body>
        <header>My Team</header>
        <div class="container">
          <div class="row">
            ${employeeArr.map(employee => employeeCard(employee)).join('')}
          </div>
        </div>

      </body>

      </html>
  `
};

module.exports = getHtml;