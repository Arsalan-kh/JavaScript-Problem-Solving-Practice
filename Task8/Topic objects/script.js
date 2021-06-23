//1 problem name:Objects//
var cities = { first: "Karachi", second: "Lahore", third: "Islamabad", fourth: "Quetta" }
    //2 problem name:Accessing Objects://
console.log(cities.first + " " + cities.fourth);
//3 problem name:Looping Objects:
for (var i in cities) {
    console.log(cities[i]);
}