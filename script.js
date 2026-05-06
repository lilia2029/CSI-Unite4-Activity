//creating a boolean variable to track current mode
let darkMode = false;

/*NEW FUNCTION: called document.querySelector()
lets us select an html ELEMENT from the page
to store a REFRENCE (pointer) to that element
*/
const body = document.querySelector("body");
//heading a JS VARIABLE that points to the element with the id="main-heading"(like in CSS)
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");

//we can change attributes & properties using JS!!
heading.textContent = "Light & Dark Website"; //JS wrote html code!
heading.style.color = "#ed919a";
body.style.background = "pink";
description.style.color = "#ed919a";

