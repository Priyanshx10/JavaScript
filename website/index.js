console.log(`hello`);

window.alert("Learning JavaScript?")

//this is a Comment.

/* this 
 is  
 a
 multiline
 comment */

 document.getElementById('myH1').textContent = "Hello";
 document.getElementById('myP1').textContent ;

 
/* 
Variable : 
 A Container that stores 
 value Behaves as if it were the value it contain.

 1.Declaration 
    let x;

 2.Assignment
    x= 10 ;
*/

//Number
let age = 23;
console.log(age)

//Float
let iphonePrice = "999.99";
console.log(iphonePrice)

//Backticks implementation
console.log(`you are ${age} years old.`)
console.log(`the Iphone 14 prices : ${iphonePrice} only`)
console.log( typeof age)

/* 
String is a series of characters.
*/

// declaring string using double and single quotes.
let firstName = "Priyansh"
let lastName = ' Yadav'
let email = "PriyanshYadav123@gmail.com"
console.log(typeof firstName)
console.log( typeof email)


/* 
Booleans are either true or false.
typically used as flag in the programs. 
*/

let online = true
console.log(typeof online)
console.log(`You are online : ${online}`)


document.getElementById("p1").textContent = firstName + lastName;
document.getElementById("p2").textContent = ` you are ${age} years old.` ;

/* 
   arithmetic operators = operands( value , varialbe , etc) and Operators ( + - * /)  
*/

let students = 30;

console.log(students)
students = students + 12
console.log(students)
students = students - 2
console.log(students)
students = students / 2
console.log(students)
students = students * 2
console.log(students)
students = students ** 2
console.log(students)
let extraStudent = students % 2
console.log(extraStudent)

//Argumented assignment Operator
students += 1;
console.log(students)
students -= 1;
console.log(students)
students *= 2;
console.log(students)
students /= 2;
console.log(students)
students %= 1;
console.log(students)
students **= 2;
console.log(students)

//Increment and Decreament Operator
students++;
console.log(students)
students--;
console.log(students)

/*

Operator Precedence
   1.parenthesis()
   2.exponents
   3.mulitplication and Division and Modulus
   4. addition and Subtraction
*/

let results = 1 + 2 * 3 + 4 ** 2;
console.log(results)  