import { iconUrl } from './iconUrl';

describe('iconUrl', () => {
  test('returns the correct URL for weather icon', () => {
    // Mock icon code
    const iconCode = '01d';
    const url = iconUrl(iconCode);

    // Define the expected URL
    const expectedUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    expect(url).toBe(expectedUrl);
  });
});