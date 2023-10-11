import setHealth from '../app';

test.each(
  [
    { name: 'Маг', health: 90, expected: 'healthy' },
    { name: 'Маг', health: 50, expected: 'wounded' },
    { name: 'Маг', health: 10, expected: 'critical' },
  ],
)('testing character $name, with $health health', ({ name, health, expected }) => {
  const result = setHealth({ name, health });
  expect(result).toBe(expected);
});
