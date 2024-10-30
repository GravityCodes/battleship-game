import Ship from "../src/modules/ship.js"

describe("ship class functions work", () => {

    const shipInstance = new Ship(4);

    test("hit() increases ship's instance hit property by 1", () => {
        shipInstance.hit();
        expect(shipInstance.getHits()).toBe(1);
    });

    test("isSunk() returns false when hits is not equal to length", () => {
        expect(shipInstance.isSunk()).toBe(false);
    });

    test("changeSunkStatus() changes the ship's instances sunk status", () => {
        //change sunk status to true.
        shipInstance.changeSunkStatus();
        expect(shipInstance.sunk).toBe(true);
    })
});