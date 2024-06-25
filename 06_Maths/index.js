/*

The Math Object in JavaScript

The Math object is a built-in object in JavaScript that has properties and methods for mathematical constants and functions
This allows for easy access and usage of these mathematical functions throughout the application.

Math Object Properties

The math object includes the following properties:
PI: Represents the value of pi (approximately 3.14159).
E: Represents the base of the natural logarithm (approximately 2.71828).
LN2: Represents the natural logarithm of 2 (approximately 0.69315).
LN10: Represents the natural logarithm of 10 (approximately 2.30259).
LOG2E: Represents the base 2 logarithm of E (approximately 1.44269).
LOG10E: Represents the base 10 logarithm of E (approximately 0.43429).

*/

// Math.E - Euler's constant and the base of natural logarithms, approximately 2.718
console.log(Math.E); // Output: 2.718281828459045

// Math.LN2 - Natural logarithm of 2, approximately 0.693
console.log(Math.LN2); // Output: 0.6931471805599453

// Math.LN10 - Natural logarithm of 10, approximately 2.302
console.log(Math.LN10); // Output: 2.302585092994046

// Math.LOG2E - Base 2 logarithm of E, approximately 1.442
console.log(Math.LOG2E); // Output: 1.4426950408889634

// Math.LOG10E - Base 10 logarithm of E, approximately 0.434
console.log(Math.LOG10E); // Output: 0.4342944819032518

// Math.PI - Ratio of the circumference of a circle to its diameter, approximately 3.14159
console.log(Math.PI); // Output: 3.141592653589793

/*

Math Object Methods

The math object includes the following methods:

abs: Returns the absolute value of a number.
round: Rounds a number to the nearest integer.
floor: Rounds a number down to the nearest integer.
ceil: Rounds a number up to the nearest integer.
sqrt: Returns the square root of a number.
pow: Returns the value of a number raised to a power.
trunc: Returns the integer part of a number by removing any fractional digits.
max: Returns the largest of the given numbers.
min: Returns the smallest of the given numbers.
random: Returns a random number between 0 (inclusive) and 1 (exclusive).
log: Returns the natural logarithm (base e) of a number.
log10: Returns the base 10 logarithm of a number.
log2: Returns the base 2 logarithm of a number.
sin: Returns the sine of an angle (in radians).
cos: Returns the cosine of an angle (in radians).
tan: Returns the tangent of an angle (in radians).

*/

// Math.SQRT1_2 - Square root of 1/2; equivalently, 1 over the square root of 2, approximately 0.707
console.log(Math.SQRT1_2); // Output: 0.7071067811865476

// Math.SQRT2 - Square root of 2, approximately 1.414
console.log(Math.SQRT2); // Output: 1.4142135623730951

// Math.abs(x) - Returns the absolute value of x
console.log(Math.abs(-4.7)); // Output: 4.7

// Math.ceil(x) - Returns the smallest integer greater than or equal to x
console.log(Math.ceil(4.4)); // Output: 5

// Math.floor(x) - Returns the largest integer less than or equal to x
console.log(Math.floor(4.7)); // Output: 4

// Math.max(x, y, ...) - Returns the largest of the given numbers
console.log(Math.max(0, 150, 30, 20, -8, -200)); // Output: 150

// Math.min(x, y, ...) - Returns the smallest of the given numbers
console.log(Math.min(0, 150, 30, 20, -8, -200)); // Output: -200

// Math.random() - Returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Output: 0.7416861489868538

// Math.round(x) - Returns the value of x rounded to the nearest integer
console.log(Math.round(4.3)); // Output: 4
console.log(Math.round(4.7)); // Output: 5

// Math.sin(x) - Returns the sine of x (x is in radians)
console.log(Math.sin(90 * Math.PI / 180)); // Output: 0.9999996829318346

// Math.sqrt(x) - Returns the square root of x
console.log(Math.sqrt(16)); // Output: 4

// Math.trunc(x) - Returns the integer part of x (removes fractional digits)
console.log(Math.trunc(4.7)); // Output: 4

