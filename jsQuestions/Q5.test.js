const {isLeapYear,isLeapYear2} = require('./Q5')

test('2000 is a leap year', () => {
    expect(isLeapYear(2000)).toBe(true);
})
test('2400 is a leap year', () => {
    expect(isLeapYear(2400)).toBe(true);
})
test('2100 is a not leap year', () => {
    expect(isLeapYear(2100)).toBe(false);
})
test('2009 is a not leap year', () => {
    expect(isLeapYear(2009)).toBe(false);
})


test('2000 is a leap year', () => {
    expect(isLeapYear2(2000)).toBe(true);
})
test('2400 is a leap year', () => {
    expect(isLeapYear2(2400)).toBe(true);
})
test('2100 is a not leap year', () => {
    expect(isLeapYear2(2100)).toBe(false);
})
test('2009 is a not leap year', () => {
    expect(isLeapYear2(2009)).toBe(false);
})