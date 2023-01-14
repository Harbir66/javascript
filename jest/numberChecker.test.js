const {isPrime,isArmstrong} = require('./numberChecker');


test('Check if 1 is Prime', () => {
    expect(isPrime(1)).toBe(false);
});
test('Check if 2 is Prime', () => {
    expect(isPrime(2)).toBe(true);
});
test('Check if 6 is Prime', () => {
    expect(isPrime(6)).toBe(false);
});
test('Check if 371 is Prime', () => {
    expect(isPrime(371)).toBe(false);
});


test('Chech if 153 is Armstrong' , () => {
    expect(isArmstrong(153)).toBe(true);
})
test('Chech if 3 is Armstrong' , () => {
    expect(isArmstrong(3)).toBe(false);
})
test('Chech if 371 is Armstrong' , () => {
    expect(isArmstrong(371)).toBe(true);
})
test('Chech if -1 is Armstrong' , () => {
    expect(isArmstrong(-1)).toBe(true);
})
