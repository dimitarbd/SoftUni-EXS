import { assert } from "chai";
import { isOddOrEven } from "../02-Even Or Odd/ 02-ovenOrOdd.js"

describe("isOddOrEven", () => {
    it("test with non string value", () => {
        assert.equal(isOddOrEven({prop: "Pesho"}), undefined, "return type is undefined");
        assert.equal(isOddOrEven(5), undefined, "return type is undefined");
        assert.isNotOk(isOddOrEven([]), "return type is undefined")
        
    });

    it("test with valid string value", () => {
        assert.equal(isOddOrEven("pesho"), "odd", "result is correct (odd)");
        assert.equal(isOddOrEven("peshoo"), "even", "result is correct (even)");
    })
})