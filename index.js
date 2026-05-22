// const seconeP = document.createElement('p')
// const paraOne = document.getElementById('demo')
// const btn = document.createElement('button')
// const headingTwo = document.getElementById('second')

// headingTwo.innerText = 'understanding DOM'
// //document.body.appendChild(headingTwo)


// paraOne.innerText = "Boom You manupulated the html file"
// seconeP.innerText = "you created this paragraph"


// document.body.appendChild(seconeP)

// btn.textContent = 'Apply'
// btn.style.color = "green"
// btn.style.height = '10vh'
// btn.style.width = '15vh'

// document.body.appendChild(btn)

// ==========================================
// CONCEPT 1: SELECTING ELEMENTS
// ==========================================
// We use document.getElementById to grab our HTML elements by their IDs.
const title = document.getElementById("main-title");
const button = document.getElementById("action-btn");
const box = document.getElementById("content-box");


// ==========================================
// CONCEPT 2: CHANGING TEXT & CONTENT
// ==========================================
// You can change an element's text immediately using .textContent
title.textContent = "Welcome to the DOM Fundamentals Task!";


// ==========================================
// CONCEPT 3: HANDLING EVENTS (CLICK)
// ==========================================
// We tell the button to "listen" for a click, then run a function when it happens.
button.addEventListener("click", function() {
    
    // ==========================================
    // CONCEPT 4: CREATING & APPENDING ELEMENTS
    // ==========================================
    
    // Step A: Create a brand new paragraph element in computer memory
    const newParagraph = document.createElement("p");
    
    // Step B: Put text inside that new paragraph
    newParagraph.textContent = "You clicked the button! A new element was born.";
    
    // Step C: Append (attach) it inside our empty 'content-box' div
    box.appendChild(newParagraph);
    
});