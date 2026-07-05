import { assert } from "chai";
import { motorcycleRider } from "../00-EXP1-Motorcycle Rider-Resources/Motorcycle Rider.js"

describe("Unit testing", () => {
    describe("Licenseregistriction functionality", () => {
        it("test is categoty AM", () => {
            assert.equal(motorcycleRider.licenseRestriction("AM"), "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        })

        it("test is categoty A1", () => {
            assert.equal(motorcycleRider.licenseRestriction("A1"), "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
        })

        it("test is categoty A2", () => {
            assert.equal(motorcycleRider.licenseRestriction("A2"), "Motorcycles with maximum power of 35KW. and the minimum age is 18.")
        })

        it("test is categoty A", () => {
            assert.equal(motorcycleRider.licenseRestriction("A"), "No motorcycle restrictions, and the minimum age is 24.")
        })

        it("test is categoty invalid input string", () => {
            assert.throws(() => motorcycleRider.licenseRestriction("Z"), "Invalid Information!")
        })

        it("test is categoty invalid input number", () => {
            assert.throw(() => motorcycleRider.licenseRestriction(5), "Invalid Information!")
        })
    })

    describe("motorcycleShowroom functionality", () => {
        it("return 1 element from array", () => {
            assert.equal(motorcycleRider.motorcycleShowroom(["50"], 50), "There are 1 available motorcycles matching your criteria!")
        })

        it("return all elements from array", () => {
            assert.equal(motorcycleRider.motorcycleShowroom(["50", "71"], 100), "There are 2 available motorcycles matching your criteria!")
        })

        it("return invalid engine volume parameter", () => {
            assert.throw(() => motorcycleRider.motorcycleShowroom({}, 50), "Invalid Information!");
        })

        it("return invalid engine maximum volume parameter", () => {
            assert.throw(() => motorcycleRider.motorcycleShowroom(50, []), "Invalid Information!");
        })
    })

    describe("Other spendings functionality", () => {
        it("test correct sum without discount", () => {
            assert.equal(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false), "You spend $600.00 for equipment and consumables!");
        });

        it("test correct sum with discount", () => {
            assert.equal(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true), "You spend $540.00 for equipment and consumables with 10% discount!");
        })

        it("throws for non-array equipment", () => {
            assert.throw(() => motorcycleRider.otherSpendings('helmet', ['engine oil', 'oil filter'], true), "Invalid Information!");
        })

        it("throws for non-array consumables", () => {
            assert.throw(() => motorcycleRider.otherSpendings(['helmet', 'jacked'], 'engine oil', true), "Invalid Information!");
        })

        it("throws for non-boolean discount", () => {
            assert.throw(() => motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], 1), "Invalid Information!");
        })

    })
})