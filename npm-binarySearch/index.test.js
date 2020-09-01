const index = require('./index');
test('function must be defined',()=>{
    expect(binary_search([10,20,30,40,50],30)).toBeDefined();
});

test('binary search for item that is present',()=>{
    expect(binary_search([10,20,30,40,50],30)).toBe(3)
});

test('check for string',()=>{
    expect(binary_search([10,20,30,'vjsb',50],30)).toBe("error");
});

test('binary search for item not present',()=>{
    expect(binary_search([10,20,30,40,50],60)).toBe("not found")
});