import { assert } from "chai";
import { planYourTrip } from "../00-EXAM/planYourTrip.js"

describe("Test functionality", () => {
    describe("choosingDestination", () => {
        it("test with invalid year", () => {
            assert.throws(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023));
            assert.throws(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2025))
        })

        it("test with invalid destination", () => {
            assert.throws(() => planYourTrip.choosingDestination("Resort", "Winter", 2023));
            assert.throws(() => planYourTrip.choosingDestination("Winter", "Winter", 2025))
        })

        it("test with requirement", () => {
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024), "Great choice! The Winter is the perfect time to visit the Ski Resort.")
        })

        it("test with invalid data", () => {
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024), "Consider visiting during the Winter for the best experience at the Ski Resort.")
        })
    })

    describe("exploreOptions", () => {

        it("test without element", () => {
            assert.equal(planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking"], 0), "Snowboarding , Winter Hiking");
            assert.equal(planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking"], 1), "Skiing , Winter Hiking");
            assert.equal(planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking"], 2), "Skiing , Snowboarding ");
        })

        it("test with invalid data", () => {
            assert.throws(() => planYourTrip.exploreOptions(1, 0));
            assert.throws(() => planYourTrip.exploreOptions("1", 0));
            assert.throws(() => planYourTrip.exploreOptions({}, 0));
            assert.throws(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking"], 5));
            assert.throws(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking"], 5.5));
            assert.throws(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking"], -5));
        })

    })

    describe("estimateExpenses", () => {
        it("test calculate", () => {
            assert.equal(planYourTrip.estimateExpenses(50, 5), "The trip is budget-friendly, estimated cost is $250.00.");
            assert.equal(planYourTrip.estimateExpenses(100, 3), "The trip is budget-friendly, estimated cost is $300.00.");
            assert.equal(planYourTrip.estimateExpenses(55, 10), "The estimated cost for the trip is $550.00, plan accordingly.");
        })

        it("test with invalid data", () => {
            assert.throws(() => planYourTrip.estimateExpenses(-1, 5));
            assert.throws(() => planYourTrip.estimateExpenses(1, -5));
            assert.throws(() => planYourTrip.estimateExpenses(-1, -5));
            assert.throws(() => planYourTrip.estimateExpenses(0, 0));
            assert.throws(() => planYourTrip.estimateExpenses(1, 0));
            assert.throws(() => planYourTrip.estimateExpenses(0, 5));
            assert.throws(() => planYourTrip.estimateExpenses(1, -5));
            assert.throws(() => planYourTrip.estimateExpenses("1", 5));
            assert.throws(() => planYourTrip.estimateExpenses([], 5));
            assert.throws(() => planYourTrip.estimateExpenses({}, 5));
            assert.throws(() => planYourTrip.estimateExpenses(5,"1"));
            assert.throws(() => planYourTrip.estimateExpenses(5,[]));
            assert.throws(() => planYourTrip.estimateExpenses(5, {}));      
        })
    })
})