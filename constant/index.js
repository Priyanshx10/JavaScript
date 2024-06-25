//const = a variable that cannot be changed

//a if a variable is a const it consist all the Capital letter in the Name if its Boolean or Number .these convention doesnt follow for Strings

const PI = 3.14159
let radius ;
let circumference;

radius = window.prompt("Enter the Radius of the circle?")
radius = Number(radius)

circumference = 2 * PI * radius
console.log(circumference)