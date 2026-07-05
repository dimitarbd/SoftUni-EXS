import { assert } from "chai"; 
import {findNewApartment} from "../00-EXP2-FindApartment/findApartment.js"

describe ("Unit Testing", () => {
    describe("Good location functionality", () => {
        it("test with invalid parameters", () => {
            assert.throws(()=> findNewApartment.isGoodLocation("Pesho", 6))
            assert.throws(()=> findNewApartment.isGoodLocation(6, "Pesho"))
            assert.throws(()=> findNewApartment.isGoodLocation(6, false))
        })
        it ("test with boolean", () => {
            assert.equal(findNewApartment.isGoodLocation("Dupnica", false), "This location is not suitable for you.");
        })

        it ("test with valid parameters",() => {
            assert.equal(findNewApartment.isGoodLocation("Sofia", false), "There is no public transport in area.")
            assert.equal(findNewApartment.isGoodLocation("Plovdiv", false), "There is no public transport in area.")
            assert.equal(findNewApartment.isGoodLocation("Varna", false), "There is no public transport in area.")            
            assert.equal(findNewApartment.isGoodLocation("Sofia", true), "You can go on home tour!");
            assert.equal(findNewApartment.isGoodLocation("Plovdiv", true), "You can go on home tour!");
            assert.equal(findNewApartment.isGoodLocation("Varna", true), "You can go on home tour!");
            
        })
    })
    describe("Large enough functionality", () => {
        it("test with valid value", () => {
            assert.equal(findNewApartment.isLargeEnough([1, 2, 3, 10, 20, 30], 9), "10, 20, 30");
            assert.equal(findNewApartment.isLargeEnough([1, 2, 3, 10, 20, 30], 10), "10, 20, 30");
            assert.equal(findNewApartment.isLargeEnough([1, 2, 3, 10, 20, 30], 50), "");
        });

        it ("test with invalid value", () => {
            assert.throws(() => findNewApartment.isLargeEnough("Pesho", "pesho"));
            assert.throws(() => findNewApartment.isLargeEnough([], "pesho"));
            assert.throws(() => findNewApartment.isLargeEnough([], 5));
            assert.throws(() => findNewApartment.isLargeEnough("Pesho", 6));
            assert.throws(() => findNewApartment.isLargeEnough(["Pesho", "gosho"], "pesho"));
            assert.throws(() => findNewApartment.isLargeEnough(["Pesho", "gosho"], "6"));
            assert.throws(() => findNewApartment.isLargeEnough([10, 20], "pesho"));
        })
    })
    describe("isItAffordable", () => {
        it("test with valid result", () => {
            assert.equal(findNewApartment.isItAffordable(550,500), "You don't have enough money for this house!");
            assert.equal(findNewApartment.isItAffordable(550,600), "You can afford this home!");
        })
        it("test with invalid result", () => {
            assert.throws(() => findNewApartment.isItAffordable("Pesho", "pesho"));
            assert.throws(() => findNewApartment.isItAffordable("Pesho", "pesho"));
            assert.throws(() => findNewApartment.isItAffordable([], "pesho"));
            assert.throws(() => findNewApartment.isItAffordable([], 6));
            assert.throws(() => findNewApartment.isItAffordable(6, {}));
            assert.throws(() => findNewApartment.isItAffordable(-6, 7));
            assert.throws(() => findNewApartment.isItAffordable(-6, -7));
            assert.throws(() => findNewApartment.isItAffordable(0, 5));
            assert.throws(() => findNewApartment.isItAffordable(0, 0));            
        })
    })

})