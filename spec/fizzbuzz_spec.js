// test specification for the fizzbuzz program
var fb = require('../fizzbuzz');

describe("a program that impelments the fizzbuzz game", function() {
	it("count from 1 to 5", function() {
		expect(fb.count(1, 5)).toBe("1 2 3 4 5");
	});

});