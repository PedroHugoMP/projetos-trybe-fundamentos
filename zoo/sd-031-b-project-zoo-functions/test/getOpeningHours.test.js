const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('', () => {
    const hours = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 8, close: 6 },
      Friday: { open: 8, close: 6 },
      Saturday: { open: 8, close: 6 },
      Sunday: { open: 8, close: 6 },
      Monday: { open: 8, close: 6 },
    };
    expect(getOpeningHours()).toEqual(hours);
  });
  // 1 ✓
  it('', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  // 2 ✓
  it('', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  // 3 ✓
  it('', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe('The zoo is closed');
  });
  // 4 ✓
  it('', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(new Error('the day must be valid. Example: Monday'));
  });
  // 5 ✓
  it('', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  // 6 ✓
  it('', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(new Error('The hour should represent a number'));
  });
  // 7
  /* it('', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is ');
  });
  // 8
  it('', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is ');
  });
  // 9
  it('', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is ');
  }); */
});
