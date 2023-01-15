const {findLongestString,findLongestString2} = require('./Q4')



test('longest string in ["we", "love", "code", "academy"] is "academy"',() => {
    expect(findLongestString(["we", "love", "code", "academy"])).toBe("academy");
})
test('longest string in ["sd","a"] is "sd"',() => {
    expect(findLongestString(["sd","a"])).toBe("sd");
})
test('longest string in ["only"] is "only"',() => {
    expect(findLongestString(["only"])).toBe("only");
})


test('longest string in ["we", "love", "code", "academy"] is "academy"',() => {
    expect(findLongestString2(["we", "love", "code", "academy"])).toBe("academy");
})
test('longest string in ["sd","a"] is "sd"',() => {
    expect(findLongestString2(["sd","a"])).toBe("sd");
})
test('longest string in ["only"] is "only"',() => {
    expect(findLongestString2(["only"])).toBe("only");
})