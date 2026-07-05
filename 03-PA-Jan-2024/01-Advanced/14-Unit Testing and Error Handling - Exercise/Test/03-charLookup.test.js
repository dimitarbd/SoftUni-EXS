import { assert } from "chai";
import { lookupChar } from "../03-charLookup/03-charLookup.js";
import { describe } from "mocha";

describe("test lookupChar functionality", () => {
    it ("test with invalid value", () => {
        assert.isUndefined(lookupChar(5, "string"), "return value is undefined");
        assert.isUndefined(lookupChar({}, 5), "return value is undefined");
        assert.isUndefined(lookupChar([], 5), "return value is undefined");
        assert.isUndefined(lookupChar("string", []), "return value is undefined");
        assert.isUndefined(lookupChar("string", "-5"), "return value is undefined");
        assert.equal(lookupChar("string", -5), "Incorrect index", "return value is undefined");
        assert.equal(lookupChar("string", 10), "Incorrect index", "return value is undefined");
        assert.equal(lookupChar("string", 2.5), undefined, "return value is undefined");
    })
    it ("test with valid value", ()=> {
        assert.equal(lookupChar("string", 1), "t", "value is valid");
        
    })

})