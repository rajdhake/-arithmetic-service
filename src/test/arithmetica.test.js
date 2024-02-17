const { add } = require("../arithmetica")

test('2 + 3 is equal to 5 ',()=>{
    expect(add(2,3)).toBe(5);
})

test('1000 + 56423 is equal to 57423 ', () => {
    expect(add(1000,56423)).toBe(57423);
})

test('10000000 + 100000000 is equal to 110000000 ', () => {
    expect(add(10000000,100000000)).toBe(110000000);
})

test('123456 + 65321 is equal to 188777 ', () => {
    expect(add(123456,65321)).toBe(188777);
})

