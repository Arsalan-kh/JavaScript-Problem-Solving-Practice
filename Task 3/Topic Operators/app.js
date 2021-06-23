//1. Problem Name: ComparisonOperators://

//List of Comparision Operators//
/*
1 greater than operator ">"
2 less than operator "<"
3 greater than equal to ">="
4 less than equal to "<="
5 double equal to "=="
6 triple equal to "==="
7 Not equal to "!="

*/
// What happens if you write 4<=5?//
var a = 4 <= 5;
console.log(a);
/*Answer is true becoz 5 is greater than 4, first check
wheater is greater than or not if yes then answer is true otherwise false*/

//2. Problem Name: AssignmentOperators://
x = 3;
x + 1;
x += 3;
console.log(x);
//output is 6//

//3. Problem Name: LogicalOperators://
// True && True //true
// False && True //false
// False && False //false
// False || True //true
// 5 > 4 && 2 < 5 // true
// 2 == 9 || 2 == 2 // true
//     !(!(4 > 2)) //true


// 4. Problem Name: LogicalOperators-RocketExample
var IsSnow = false;
var IsRain = false;
var IsSpeed = 20;
var LaunchTheRocket = (IsSpeed = 20) && !IsRain && !IsSnow;
console.log(LaunchTheRocket);
//Output is true //

// //5. Problem Name: IfElseCondition//
// var student;
// var gainedMarks = prompt("enter the marks");

// if (gainedMarks >= 50) {
//     student = "Congratulation you  passed !"
// } else {
//     student = "you failed ! never mind next time :-P"
// }
// alert(student);

//6. Problem Name: SwitchCase://