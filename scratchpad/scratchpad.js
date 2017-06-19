
var myHeading = document.querySelector('h1');
myHeading.textContent = "Dibble Dabble Do";


/* button */
var button = document.querySelector('button');
button.onclick = function( button) {
  var leave_comment = prompt('Do you have some Dibble Dabble to add?');
  alert('Added ' + leave_comment  + ', Thank you for your Dibble Dabble!');
}
// Learn about this code on MDN: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables -->

//alert message what is your name
var name = prompt('What is your name?'); {
  alert('Hello ' + name + ', nice to see you!');
 }