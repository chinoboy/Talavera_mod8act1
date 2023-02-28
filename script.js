var fullname=prompt("Please enter your full name")
var username=prompt("Please enter your username")
var conf=confirm("Press ok if you are Male and cancel is Female");

if(conf == true){
  alert("User is Male")
  document.getElementById("gender").innerHTML="Male"
} 
else{
    alert("User if Female") 
    document.getElementById("gender").innerHTML="Female"
}
var desc=prompt("Please write a short description of yourself?")

let yearnow = 2023
do{
    var birthyear = prompt("Enter your Birthyear"); 
}
while (birthyear==NaN || birthyear==null || birthyear==0)
 var yourAge=yearnow-birthyear; 

var prof=confirm("Do u want a profile pic");
if(prof == true){
 
 var pic=prompt("Enter the filename of your picture","pic 1.jpg");
 document.getElementById("ppic").src = "pic 1.jpg";
 alert("Profile pic has been update")
} 
else{
    alert("user does not want to have a profile picture") 
}
document.getElementById("fname").innerHTML=fullname
document.getElementById("username").innerHTML=username
document.getElementById("desc").innerHTML=desc
document.getElementById("year").innerHTML=birthyear
document.getElementById("age").innerHTML=yourAge