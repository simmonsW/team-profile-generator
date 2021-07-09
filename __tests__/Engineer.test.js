const Engineer = require('../lib/Engineer');

test('Creates an Engineer object', () => {
  const engineer = new Engineer('Jim Halpert', 3, 'jim.halpert@dm.com', 'jimHalpert');

  expect(typeof(engineer)).toBe('object');
});

test('Engineer has a github username', () => {
  const engineer = new Engineer('Jim Halpert', 3, 'jim.halpert@dm.com', 'jimHalpert');

  expect(engineer.getGithub()).toBe('jimHalpert');
});

test('Engineer has a role of Engineer', () => {
  const engineer = new Engineer('Jim Halpert', 3, 'jim.halpert@dm.com', 'jimHalpert');

  expect(engineer.getRole()).toBe('Engineer');
});