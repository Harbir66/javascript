const {getLargestEven,getLargestEven2} = require('./Q1')

test('check if largest even in 1,2,3,4,5 is 4',() => {
    expect(getLargestEven([1,2,3,4,5])).toBe(4);
})
test('check if largest even in 1,3,5,7 is -1',() => {
    expect(getLargestEven([1,3,5,7])).toBe(-1);
})


test('check if largest even in 1,2,3,4,5 is 4',() => {
    expect(getLargestEven([1,2,3,4,5])).toBe(4);
})
test('check if largest even in 1,3,5,7 is -1',() => {
    expect(getLargestEven([1,3,5,7])).toBe(-1);
})