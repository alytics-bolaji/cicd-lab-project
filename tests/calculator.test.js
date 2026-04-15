// tests/calculator.test.js
const { add, subtract, multiply, divide } = require('../src/calculator');
 
describe('Calculator', () => {
 
  describe('add()', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
    test('adds negative numbers', () => {
      expect(add(-1, -2)).toBe(-3);
    });
    test('adds zero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });
 
  describe('divide()', () => {
    test('divides correctly', () => {
      expect(divide(10, 2)).toBe(5);
    });
    test('throws on division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });
  });
 
  describe('subtract() and multiply()', () => {
    test('subtracts correctly', () => { expect(subtract(5, 3)).toBe(2); });
    test('multiplies correctly', () => { expect(multiply(3, 4)).toBe(12); });
  });
 
});

