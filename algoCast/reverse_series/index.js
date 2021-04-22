const reverse = string => 
  string
    .split("")
    .reverse()
    .join("");

const _reverse = string => {
  let result = "";
  for (let character of string) {
    result = character + result;
  }
  return result;
}

const ___reverse = string => 
  string.split("").reduce((result, character) => character + result);

// testing
mocha.setup("dbb");
const { assert } = chai;

describe("String Reversal", () => {
  it("should reverse string", () => {
    assert.equal(reverse("Hello World!"), "dlroW olloH");
    assert.equal(_reverse("Hello World!"), "dlroW olloH");
    assert.equal(__reverse("Hello World!"), "dlroW olloH");
  });
});

mocha.run();