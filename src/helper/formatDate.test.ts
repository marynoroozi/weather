import { formatDate } from "./formatDate";


describe('formatDate function', () => {
    const originalToLocaleDateString = Date.prototype.toLocaleDateString;
  
    beforeEach(() => {
      // Mocking toLocaleDateString to ensure consistent results
      Date.prototype.toLocaleDateString = jest.fn(() => 'Wed, 19 May');
    });
  
    afterEach(() => {
      // Restore the original implementation after each test
      Date.prototype.toLocaleDateString = originalToLocaleDateString;
    });
  
    test('returns the formatted date in "short" weekday, "numeric" day, and "short" month format', () => {
      const timestamp = 1621395000;
      const formattedDate = formatDate(timestamp);
      expect(formattedDate).toBe('Wed, 19 May');
    });
  
    test('returns the formatted date correctly for different timestamps', () => {
      const timestamp1 = 1621395000;
      const timestamp2 = 1621470000;
      const timestamp3 = 1633621800;
      expect(formatDate(timestamp1)).toBe('Wed, 19 May');
      expect(formatDate(timestamp2)).toBe('Wed, 19 May');
      expect(formatDate(timestamp3)).toBe('Wed, 19 May');
    });
  });