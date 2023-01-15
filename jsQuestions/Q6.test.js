const {endsWithScript,endsWithScript2} = require('./Q6')


test('"javaScript" has "Script" in the end',()=> {
    expect(endsWithScript("javaScript")).toBe(true);
})
test('"Script" has "Script" in the end',()=> {
    expect(endsWithScript("Script")).toBe(true);
})
test('"script" does not have "Script" in the end',()=> {
    expect(endsWithScript("script")).toBe(false);
})
test('"hello" does not have "Script" in the end',()=> {
    expect(endsWithScript("hello")).toBe(false);
})


test('"javaScript" has "Script" in the end',()=> {
    expect(endsWithScript2("javaScript")).toBe(true);
})


test('"Script" has "Script" in the end',()=> {
    expect(endsWithScript2("Script")).toBe(true);
})


test('"script" does not have "Script" in the end',()=> {
    expect(endsWithScript2("script")).toBe(false);
})


test('"hello" does not have "Script" in the end',()=> {
    expect(endsWithScript2("hello")).toBe(false);
})

