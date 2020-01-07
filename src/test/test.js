import { default as colourHealth } from '../js/script';
import { default as params } from '../js/param';

test('To have params "health"', () => {
  expect(params).toHaveProperty('health');
});

test('Returned right value', () => {
  if (params.health > 50) {
    expect(colourHealth(params)).toBe('healthy');
  } else if (params.health <= 50 && params.health > 15) {
    expect(colourHealth(params)).toBe('wounded');
  } else if (params.health <= 15 && params.health > 0) {
    expect(colourHealth(params)).toBe('critical');
  }
});

test('Check all value', () => {
  for (let i = 0; i < 100; i += 5) {
    const obj = {};
    obj.health = i;
    expect(colourHealth(obj)).toBeTruthy();
  }
});

test('Not undefined', () => {
  expect(colourHealth(params)).not.toBeUndefined();
});

test('Not null', () => {
  expect(colourHealth(params)).not.toBeNull();
});

test('Is null', () => {
  const obj = {};
  obj.health = -1;
  expect(colourHealth(obj)).toBeNull();
});
