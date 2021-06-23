// var a = document.getElementsByClassName("div-class")[0].className = "Changed-class";
// console.log(a);
// document.getElementsByClassName("abc")[0].style.border = "5px solid blue"
// document.getElementsByClassName("abc")[0].style.color = "red"

//Problem name Qquery selector//
var b = document.querySelector(".div-class").style.border = "7px solid blue";
console.log(b)

//3) Problem Name: StylingDOM//
var c = document.getElementById("myDiv").innerHTML;
console.log(c)
document.getElementById("myDiv").style.border = "3px solid black"
document.getElementById("myDiv").style.color = "blue"
document.getElementById("myDiv").setAttribute("style", "color:green")
    //4) Problem Name: AddEventListener//

function greeting() {
    alert("hello my friend")
}

///5) Problem Name: Forms//


var password = document.getElementById("exampleInputPassword1");
var email = document.getElementById("exampleInputEmail1");
var form = document.getElementsByTagName("form")[0];
console.log(form);


form.addEventListener("submit", function(e) {
    if (password.value == "" || email.value == "") {
        e.preventDefault();
        alert("Complete all fields");
    } else {
        alert("login successfully")
    }
})