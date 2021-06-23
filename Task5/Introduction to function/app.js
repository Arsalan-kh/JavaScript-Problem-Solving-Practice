//Problem 1 : INtroduction to function

// *Function decelration* //
function double(paisa) {
    let answer = paisa * 2;
    return answer;
}

// *calling a function* //
console.log(double(8));
//output: 16//


//Problem 2 : Calling a function with different parameters
console.log(double(3));
console.log(double(6));
console.log(double(10));
//output:6//
//output:12//
//output:20//


//Problem 3 : Function with multiples input parameters//
function AddTwoNumbers(Num1, Num2) {
    let sum = Num1 + Num2;
    return sum;

}
console.log(AddTwoNumbers(2, 21));
//output: 23//

//Problem 3 : ReturningUsingAnotherWay//

function AddTwoNumbers(Num1, Num2) {

    return Num1 + Num2;

}
console.log(AddTwoNumbers(1, 9));