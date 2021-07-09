const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
  const intern = new Intern('Ryan Howard', 12, 'ryan.howard@dm.com', 'University of Scranton');

  expect(typeof(intern)).toBe('object');
});

test('Intern has a school', () => {
  const intern = new Intern('Ryan Howard', 12, 'ryan.howard@dm.com', 'University of Scranton');

  expect(intern.getSchool()).toBe('University of Scranton');
});

test('Intern has a role of Intern', () => {
  const intern = new Intern('Ryan Howard', 12, 'ryan.howard@dm.com', 'University of Scranton');

  expect(intern.getRole()).toBe('Intern');
});