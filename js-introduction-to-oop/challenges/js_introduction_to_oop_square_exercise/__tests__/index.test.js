import Square from '../Square.js';
import SquaresGenerator from '../SquaresGenerator.js';

test('GetSide', () => {
  const square = new Square(4);
  const actual = square.getSide();
  expect(actual).toBe(4);
});

test('SquaresGenerator #1', () => {
  const squares = SquaresGenerator.generate(1, 1);
  const expected = [new Square(1)];
  expect(squares).toEqual(expected);
});

test('SquaresGenerator #2', () => {
  const squares = SquaresGenerator.generate(3, 2);
  const expected = [new Square(3), new Square(3)];
  expect(squares).toEqual(expected);
  expect(squares[0]).not.toBe(squares[1]);
});

test('SquaresGenerator #3 default count', () => {
  const squares = SquaresGenerator.generate(2);
  expect(squares).toHaveLength(5);
});
