const {checkAllDigitSame,checkAllDigitSame2} = require('./Q2')

test('all digits in 22 are same so return true', () => {
    expect(checkAllDigitSame(22)).toBe(true);
});
test('all digits in 23 are not  same so return false', () => {
    expect(checkAllDigitSame(23)).toBe(false);
});
test('all digits in -23 are not  same so return false', () => {
    expect(checkAllDigitSame(-23)).toBe(false);
});
test('all digits in -22 are same so return true', () => {
    expect(checkAllDigitSame(-22)).toBe(true);
});



test('all digits in 22 are same so return true', () => {
    expect(checkAllDigitSame2(22)).toBe(true);
});
test('all digits in 23 are not  same so return false', () => {
    expect(checkAllDigitSame2(23)).toBe(false);
});
test('all digits in -23 are not  same so return false', () => {
    expect(checkAllDigitSame2(-23)).toBe(false);
});
test('all digits in -22 are same so return true', () => {
    expect(checkAllDigitSame2(-22)).toBe(true);
});