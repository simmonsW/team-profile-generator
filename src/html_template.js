function getHtml(employeeArr) {
  return `
    <DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="style.css">
      </head>

      <body>
        <header>My Team</header>
        <div class="container">
          <div class="row">
            ${employeeArr.map(employee => employee.name)}
          </div>
        </div>

      </body>

      </html>
  `
};

module.exports = getHtml;