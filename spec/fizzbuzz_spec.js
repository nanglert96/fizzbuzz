// test specification for the fizzbuzz program
var fb = require('../fizzbuzz');

describe("a program that impelments the fizzbuzz game", function() {
	
	it("count from 1 to 15 and play fizzbuzz", function() {
		expect(fb.count(1, 15)).toBe("1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz");
	});

	it("replaces multiples of 3 with fizz", function() {
		expect(fb.fizzer(3)).toBe("fizz");
		expect(fb.fizzer(4)).toBe(4);
	});

	it("replaces multiples of 5 with buzz", function() {
		expect(fb.buzzer(5)).toBe("buzz");
		expect(fb.buzzer(6)).toBe(6);
	});

	it("replaces multiples of 3 and 5 with fizzbuzz", function() {
		expect(fb.fizzbuzzer(15)).toBe("fizzbuzz");
		expect(fb.fizzbuzzer(14)).toBe(14);
	});
});
