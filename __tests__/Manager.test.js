const Manager = require('../lib/Manager');

test('Creates a Manager object', () => {
  const manager = new Manager('Micheal Scott', 1, 'micheal.scott@dm.com', 2);

  expect(typeof(manager)).toBe('object');
});

test('Manager has an office number', () => {
  const manager = new Manager('Micheal Scott', 1, 'micheal.scott@dm.com', 2);

  expect(manager.getOfficeNumber()).toBe(2);
});

test('Manager has a role of Manager', () => {
  const manager = new Manager('Micheal Scott', 1, 'micheal.scott@dm.com', 2);

  expect(manager.getRole()).toBe('Manager');
});