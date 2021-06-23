//1) Problem Name: ForLoops

var arr = ["cricket", "football", "basketball", "pool", "cricket"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (arr[i] === "cricket") {
//         console.log("cricket exist")
//     } else {
//         console.log("cricket is not exist")
//     }

// }
// //2 problem name:indexOf//
// var firstind = arr.indexOf("cricket");
// // console.log(firstind);

//3 problem name:LastindexOf//
// var lastInd = arr.lastIndexOf("cricket", 3);
// console.log(lastInd);

//4 problem name: filter array

var ages = [40, 56, 80, 90, 100, 101, 102, 23, 22];
var a = ages.filter(checkage);
console.log(a)

function checkage(age) {
    return age >= 40;
}