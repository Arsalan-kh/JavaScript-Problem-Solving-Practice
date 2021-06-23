function send(){
 let InputElement=document.querySelector("#name");
//  console.log(InputElement);
 let InputValue=InputElement.value;
//  console.log(InputValue);

 let heading=document.querySelector("h1>span").innerHTML=InputValue;
//  console.log(heading);
//  document.querySelector("h1>span").innerHTML=InputValue; 
 alert("Your meesage is sent to number");
}
