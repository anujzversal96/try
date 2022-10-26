const { notDeepEqual } = require("assert");

function example() {
  return "a";
}

test("checking", () => {
  console.log("Hi");
  expect(example()).toHaveLength(1);
});
