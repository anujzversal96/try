const { notDeepEqual } = require("assert");

function example(){
    return "a";
}

test('checking', ()=> {
    expect(example()).toHaveLength(1);
})