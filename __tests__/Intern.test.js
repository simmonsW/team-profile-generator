const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
  const intern = new Intern('Ryan Howard', 12, 'ryan.howard@dm.com', 'University of Scranton');

  expect(typeof(intern)).toBe('object');
});

test('intern has a school', () => {
  const intern = new Intern('Ryan Howard', 12, 'ryan.howard@dm.com', 'University of Scranton');

  expect(intern.getSchool()).toBe('University of Scranton');
});

test('intern has a role of intern', () => {
  const intern = new Intern('Ryan Howard', 12, 'ryan.howard@dm.com', 'University of Scranton');

  expect(intern.getRole()).toBe('Intern');
});