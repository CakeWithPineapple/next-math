import { v1 as useMath } from "../src";

describe('useMath', () => {
  it('should add two numbers', () => {
    const result = useMath('add', ".", 2, 3);
    expect(result).toEqual("5");
  });

  it('should subtract two numbers', () => {
    const result = useMath('subtract', ".", 5, 2);
    expect(result).toEqual("3");
  });

  it('should multiply two numbers', () => {
    const result = useMath('multiply', ".", 4, 2);
    expect(result).toEqual("8");
  });

  it('should divide two numbers', () => {
    const result = useMath('divide', ".", 6, 2);
    expect(result).toEqual("3");
  });

  // Add more test cases based on your library features

  // Example of testing unit conversion
  it('should convert meters to feet', () => {
    const result = useMath('unit_conversion', ".", 10, 'meters', 'feet');
    expect(result).toEqual("32.8084"); // Adjust the expectation based on your use case
  });
});