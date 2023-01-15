const {countVowels,countVowels2} = require('./Q8')

test('"codeacademy" has 5 vowels',() => {
    expect(countVowels('codeacademy')).toBe(5);
})
test('"zxc" has 0 vowels',() => {
    expect(countVowels('zxc')).toBe(0);
})
test('"zxzxczxcc" has 0 vowels',() => {
    expect(countVowels('zxzxczxcc')).toBe(0);
})
test('"aeiou" has 5 vowels',() => {
    expect(countVowels('aeiou')).toBe(5);
})


test('"codeacademy" has 5 vowels',() => {
    expect(countVowels2('codeacademy')).toBe(5);
})
test('"zxc" has 0 vowels',() => {
    expect(countVowels2('zxc')).toBe(0);
})
test('"zxzxczxcc" has 0 vowels',() => {
    expect(countVowels2('zxzxczxcc')).toBe(0);
})
test('"aeiou" has 5 vowels',() => {
    expect(countVowels2('aeiou')).toBe(5);
})