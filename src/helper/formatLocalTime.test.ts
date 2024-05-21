import {formatUTCToLocalTime} from './formatLocalTime'

describe('formatUTCToLocalTime', () => {
  test('converts timestamp to local time correctly for positive timezone offset', () => {
    const timestamp = 1622505600; 
    const timezone = 360; // GMT+6
    const result = formatUTCToLocalTime(timestamp, timezone);
    expect(result).toBe('12:06 AM');
  });

  test('converts timestamp to local time correctly for negative timezone offset', () => {
    const timestamp = 1622505600; 
    const timezone = -300; // GMT-5
    const result = formatUTCToLocalTime(timestamp, timezone);
    expect(result).toBe('11:55 PM');
  });

  test('converts timestamp to local time correctly for zero timezone offset (UTC)', () => {
    const timestamp = 1622505600; 
    const timezone = 0; // UTC
    const result = formatUTCToLocalTime(timestamp, timezone);
    expect(result).toBe('12:00 AM');
  });

  test('handles midnight correctly in local time', () => {
    const timestamp = 1622581200; 
    const timezone = -240; // GMT-4
    const result = formatUTCToLocalTime(timestamp, timezone);
    expect(result).toBe('08:56 PM');
  });

  test('handles noon correctly in local time', () => {
    const timestamp = 1622548800; 
    const timezone = 60; // GMT+1
    const result = formatUTCToLocalTime(timestamp, timezone);
    expect(result).toBe('12:01 PM');
  });

});
