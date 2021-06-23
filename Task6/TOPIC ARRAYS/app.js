// //1) Problem Name: IntroToArrays//
// var game = ["cricket", "football", "pubg", "call of duty", ];
// console.log(game[0]);
// console.log(game[1]);
// console.log(game[2]);
// console.log(game[3]);

//2) .Problem Name: ArrayTraversal//
//print arrray using for loop//
// let game = ["cricket", "volley ball", "hockey", "footnball", ];
// for (i = 0; i < game.length; i++) {
//     console.log("my game is " + game[i])
// }

//now print array same loop with indexes//
let game = ["cricket", "volley ball", "hockey", "football"];
for (i = 0; i < game.length; i++) {
    console.log(i + game[i]);
}

//3) Problem Name: ArrayAccess

//Print the first and last member of the same array
console.log(game[0]); //print first member of array//

console.log(game[3]); //print last memeber of array//
//4) Problem Name: Array Length
console.log(game.length) // print the length array length is 4//
    //5) Problem Name: toString
console.log(game.toString()); //convert an array to string//

//6) Problem Name: Utility Methods
//add polo at the end of an array//
game.push("polo")
console.log(game)
    //remove polo at the end of an array//
game.pop("polo")
console.log(game)

//add polo at the beginning of an array//
game.unshift("polo")
console.log(game)

//remove polo at the beginning of an array//
game.shift("polo")
console.log(game)

//7) Problem Name: Splice
game.splice(3, 0, 'polo', 'kabbadi');
console.log(game)