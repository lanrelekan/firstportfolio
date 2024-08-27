// var typed = new Typed(".text", {
//   String:["Frontend Developer" , "Backend Developer" , "Student"],
//   typespeed:100,
//   backspeed:100,
//   backdelay:500,
//   loop:true,
// })



document.addEventListener("DOMContentLoaded", function() {
  new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    // showCursor: false // Disable the cursor provided by Typed.js
  });
});