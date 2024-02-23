import generatePassword from "./passwordHelper";

describe('generatePassword', () => {
  test('should generate a password', () => {
    const passwordOptions = {
      type: 'Random',
      include_numbers: true,
      include_symbols: true,
      length: 5
    };

    const result = generatePassword(passwordOptions);
    expect(typeof result).toBe('string');
  });
});