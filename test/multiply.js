//Gabriel Ekodo
//Priscilla Akumu

const assert = require("chai").assert;
const multiply = require("../multiply");

describe("test for result of multiply function", () => {
  //*************Test cycle 1 *********************
  //
  it("check that result is equal to 1", () => {
    assert.equal(multiply(1, 1), 1);
  });
  it("check that result is equal to 1", () => {
    assert.equal(multiply(1, 1), 1);
  });
  //
  //***************Test cycle 2 ***************
  it("check that result is equal to 4", () => {
    assert.equal(multiply(2, 2), 4);
  });
  it("check that result is equal to 4", () => {
    assert.equal(multiply(2, 2), 4);
  });
  //
  //
  //***************Test cycle 3 *************
  it("check that result is equal to 9", () => {
    assert.equal(multiply(3, 3), 9);
  });
  it("check that result is equal to 9", () => {
    assert.equal(multiply(3, 3), 9);
  });
  //
  //
  //*************************Test cycle 4 **********
  it("check that result is equal to 16", () => {
    assert.equal(multiply(4, 4), 16);
  });
  it("check that result is equal to 16", () => {
    assert.equal(multiply(4, 4), 16);
  });

  //
  //******************Test cycle 5 ****************
  it("check that result is equal to 1035", () => {
    assert.equal(multiply(23, 45), 23 * 45);
  });
  it("check that result is equal to 1035", () => {
    assert.equal(multiply(23, 45), 23 * 45);
  });
});
