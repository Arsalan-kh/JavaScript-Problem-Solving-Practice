/*
    Topic 3 Operators
       ----Q1-----
       What will be the output of following:
*/
var x = 5, y = 10, z = 15; //initilizing and assinging a variable 

console.log(x + y); //output will be 15

console.log(y - x); //output will be 5

console.log(x * y); //output will be 50

console.log(y / x); //output will be 2

console.log(x % 2); //output will be 1

console.log(x ++);  //output will be 5 because of post increment,increments and returns the value before incrementing.

console.log(x --);  //output will be 6 because of post decrement and returns the value before decrementing.



/*
    Topic 3 Operators
       ----Q2-----
       What will be the output of following:
*/
var a = 5, b = 10, c = "5";

var x = a;        

console.log(a == c);  //output will be true 

console.log(a === c); //output will be false becasue '===' return true if and only if both operands are of the same type and contain the same value.In our statement a is integer and c is string

console.log(a == x); //output will be true 

console.log(a != b); //output will be true

console.log(a > b); //output will be false 

console.log(a < b); //output will be true

console.log(a >= b); //output will be false

console.log(a <= b); //output will be true

console.log(a >= c); //output will be true

console.log(a <= c); //output will be true


/*
    Topic 3 Operators
       ----Q3-----
       write a program that use assingment and logical operators
*/
var isWeekend = false;
var hadShower = true;
var hasMoney = true;
var hasLunch = false;
var shouldGoToUni = !isWeekend && hadShower && hasMoney || hasLunch;
console.log(shouldGoToUni);

//output is true
//Explanation: is not the weekend, had showered true, had money false, but had lunch true, shouldGoToUni the output is true.
