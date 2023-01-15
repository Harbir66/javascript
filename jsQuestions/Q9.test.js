const {changeCharToNext,changeCharToNext2} = require('./Q9')


test('"codeacademy" will change to "dpefbdbefnz"', () => {
    expect(changeCharToNext("codeacademy")).toBe("dpefbdbefnz");
})
test('"lazyinterns" will change to "dpefbdbefnz"', () => {
    expect(changeCharToNext("lazyinterns")).toBe("mbazjoufsot");
})
test('"abcz" will change to "bcda"', () => {
    expect(changeCharToNext("abcz")).toBe("bcda");
})



test('"codeacademy" will change to "dpefbdbefnz"', () => {
    expect(changeCharToNext2("codeacademy")).toBe("dpefbdbefnz");
})
test('"lazyinterns" will change to "dpefbdbefnz"', () => {
    expect(changeCharToNext2("lazyinterns")).toBe("mbazjoufsot");
})
test('"abcz" will change to "bcda"', () => {
    expect(changeCharToNext2("abcz")).toBe("bcda");
})