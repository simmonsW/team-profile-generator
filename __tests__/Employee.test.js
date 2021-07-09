const Employee = require ('../lib/Employee');

test('creates an Employee object', () => {
  const employee = new Employee('Dwight', '2', 'dwight.schrute@dm.com');

  expect(typeof(employee)).toBe('object');
});

test('Employee has a name', () => {
  const employee = new Employee('Dwight', '2', 'dwight.schrute@dm.com');

  expect(employee.getName()).toBe('Dwight');
});

test('Employee has an id', () => {
  const employee = new Employee('Dwight', '2', 'dwight.schrute@dm.com');

  expect(employee.getId()).toBe('2');
});

test('Employee has an email', () => {
  const employee = new Employee('Dwight', '2', 'dwight.schrute@dm.com');

  expect(employee.getEmail()).toBe('dwight.schrute@dm.com');
});

test('Employee has a role', () => {
  const employee = new Employee('Dwight', '2', 'dwight.schrute@dm.com');

  expect(employee.getRole()).toBe('Employee');
});