import { addNumbers } from "../src/addNumbers.js";

describe("test suite", function(){
    it("works with positive numbers", function(){
        expect(addNumbers(1,2)).toEqual(3);
    });

    it("works with negative numbers", function(){
        expect(addNumbers(-1,-2)).toEqual(-3);
    });

    it("works with zero", function(){
        expect(addNumbers(0,2)).toEqual(2);
    });

    it("works with positive and negative", function(){
        expect(addNumbers(2,-3)).toEqual(-2);
    });
});

