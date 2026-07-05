import { assert } from "chai";
import { mathEnforcer } from "../04-Math Enforcer/04-mathEnforcer.js";

describe ("test addFive functionality", () => {
    it("test with invalid value", () => {
        assert.isUndefined(mathEnforcer.addFive("pesho"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.addFive([]), "return value must be undefined");
        assert.isUndefined(mathEnforcer.addFive("4"), "return value must be undefined");
    })
    it("test with valid value", () => {
        assert.equal(mathEnforcer.addFive(-10), -5, "value is correct");
        assert.equal(mathEnforcer.addFive(-5), 0, "value is correct");
        assert.equal(mathEnforcer.addFive(0), 5, "value is correct");
        assert.equal(mathEnforcer.addFive(5), 10, "value is correct");
        assert.equal(mathEnforcer.addFive(5.5), 10.5, "value is correct")

    })
});

describe ("test substractTen functionality", () => {
    it("test with valid value", () => {
        assert.isUndefined(mathEnforcer.subtractTen("pesho"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.subtractTen([]), "return value must be undefined");
        assert.isUndefined(mathEnforcer.subtractTen("10"), "return value must be undefined");
    })
    it("test with valid value", () => {
        assert.equal(mathEnforcer.subtractTen(-10),-20, "value is correct");
        assert.equal(mathEnforcer.subtractTen(10), 0, "value is correct");
        assert.equal(mathEnforcer.subtractTen(0), -10, "value is correct");
        assert.equal(mathEnforcer.subtractTen(15), 5, "value is correct");
        assert.equal(mathEnforcer.subtractTen(15.5), 5.5, "value is correct")
    })
});

describe ("test sum functionality", () => {
    it("test with valid value", () => {
        assert.isUndefined(mathEnforcer.sum("pesho", "gosho"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("pesho", []), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("pesho", 10), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(10, []), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("5", 10), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(10, "Pesho"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(10, "10"), "return value must be undefined");
    })
    it("test with valid value", () => {
        assert.equal(mathEnforcer.sum(-10, 10), 0, "value is correct");
        assert.equal(mathEnforcer.sum(10, 0), 10, "value is correct");
        assert.equal(mathEnforcer.sum(0, 0), 0, "value is correct");
        assert.equal(mathEnforcer.sum(-10, -5), -15, "value is correct");
        assert.equal(mathEnforcer.sum(10, 5), 15, "value is correct");
        assert.equal(mathEnforcer.sum(10.5, 5), 15.5, "value is correct");
        assert.equal(mathEnforcer.sum(1.5, 5.5), 7, "value is correct")
    })
})
