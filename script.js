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
//can do diffrent colors using rgb!
heading.style.color = "#ed919a";
body.style.background = "pink";
description.style.color = "#ed919a";
toggleBtn.style.color = "pink";
toggleBtn.style.background = "#ed919a";

//Define what happens when button is clicked
function toggleMode(){
    console.log("triggered the function");
    //1.Flip the boolean variable to track the mode (now...darkMode = true)
    darkMode = !darkMode;
    console.log(darkMode);
    //2.Conditionally apply styles depending on mode (IS IT TRUE?)
    if (darkMode == true){
        console.log("apply dark styles");
        body.style.background = "black";
        heading.style.color ="purple";
        description.style.color ="purple";
        toggleBtn.style.color ="purple";
        toggleBtn.style.background ="rgb(166, 132, 189)";
        image.src = "https://i.pinimg.com/236x/08/d8/89/08d8893ef02bd5d17dcfbce1ffb11a9f.jpg";
        description.textContent = "Welcome to the dark side 😈";
        toggleBtn.textContent = "Switch to light";
    }
    else{
        console.log("apply light styles");
        body.style.background = "pink";
        heading.style.color = "#ed919a";
        description.style.color = "#ed919a";
        toggleBtn.style.color = "pink";
        toggleBtn.style.background = "#ed919a";
        image.src = "ballet.jpg";
        description.textContent = "Welcome Back! 😇";
        toggleBtn.textContent = "Switch to dark";
    }
}

// Attach function to the actual button
toggleBtn.addEventListener("click", toggleMode);


//REVIEW: making button interactive
const image = document.querySelector("#image");
const hackerBtn = document.querySelector("#hacker");
hackerBtn.style.background = "black";
hackerBtn.style.color = "white";
//2. Attach a finction to the button 
hackerBtn.addEventListener("click", setHacker);
//3.Define the function
function setHacker(){
    body.style.background = "black";
    body.style.fontFamily = "monospace";
    description.style.color = "rgb(0, 186, 28)";
    toggleBtn.style.background = "rgb(0, 186, 28)";
    heading.style.color = "rgb(0, 186, 28)";
    description.textContent = "YOU HAVE BEEN HACKED 🐱‍💻";
    image.src = "hacked.jpg";
    hackerBtn.style.background = "black";
    hackerBtn.style.color = "white";
    
}

//Another Mode!
const gameBtn = document.querySelector("#playGame");
gameBtn.addEventListener("click", playGame);
function playGame() {
    console.log("games!!");
    
}