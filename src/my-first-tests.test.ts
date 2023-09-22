export const sum = function (...args: number[]): number {
  return args.reduce((x, y) => x + y, 0);
};

describe("My first test group", () => {
  test.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
    [2, NaN, NaN],
  ])("Sum %i + %i = %i", (a, b, expected) => {
    expect(sum(a, b)).toBe(expected);
  });
});
