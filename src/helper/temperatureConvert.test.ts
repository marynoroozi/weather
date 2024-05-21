import { temperatureConvert } from './temperatureConvert';

describe('temperatureConvert', () => {
  beforeEach(() => {
    // Clear localStorage before each test to ensure no interference between tests
    localStorage.clear();
  });

  test('returns Celsius value when localStorage "temp" is not set', () => {
    const celsius = 25;
    const result = temperatureConvert(celsius);
    expect(result).toBe(celsius);
  });

  test('returns Celsius value when localStorage "temp" is set to "false"', () => {
    localStorage.setItem('temp', 'false');
    const celsius = 25;
    const result = temperatureConvert(celsius);
    expect(result).toBe(celsius);
  });

  test('returns Fahrenheit value when localStorage "temp" is set to "true"', () => {
    localStorage.setItem('temp', 'true');
    const celsius = 25;
    const result = temperatureConvert(celsius);
    const expectedFahrenheit = ((celsius * 9) / 5 + 32).toFixed(2);
    expect(result).toBe(expectedFahrenheit);
  });

  test('handles zero Celsius correctly', () => {
    localStorage.setItem('temp', 'true');
    const celsius = 0;
    const result = temperatureConvert(celsius);
    const expectedFahrenheit = ((celsius * 9) / 5 + 32).toFixed(2);
    expect(result).toBe(expectedFahrenheit);
  });

  test('handles negative Celsius correctly', () => {
    localStorage.setItem('temp', 'true');
    const celsius = -10;
    const result = temperatureConvert(celsius);
    const expectedFahrenheit = ((celsius * 9) / 5 + 32).toFixed(2);
    expect(result).toBe(expectedFahrenheit);
  });

  test('handles null and undefined localStorage temp', () => {
    localStorage.removeItem('temp');
    const celsius = 15;
    const result = temperatureConvert(celsius);
    expect(result).toBe(celsius);
  });

  test('handles invalid localStorage temp value', () => {
    localStorage.setItem('temp', 'invalid_value');
    const celsius = 20;
    const result = temperatureConvert(celsius);
    expect(result).toBe(celsius);
  });
});