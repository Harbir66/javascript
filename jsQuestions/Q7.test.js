const {concatStrings,concatStrings2} = require('./Q7')

test('["code", "academy"] on concatinating becomes "odecademy"', () => {
    expect(concatStrings("code","academy")).toBe("odecademy");
})
test('["12", "3"] on concatinating becomes "2"', () => {
    expect(concatStrings("12","3")).toBe("2");
})



test('["code", "academy"] on concatinating becomes "odecademy"', () => {
    expect(concatStrings2("code", "academy")).toBe("odecademy");
})
test('["12", "3"] on concatinating becomes "2"', () => {
    expect(concatStrings2("12", "3")).toBe("2");
})
