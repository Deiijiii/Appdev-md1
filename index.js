// alert("Hello");

// 1st step - Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// 5th step - all items
const photo = document.querySelector('.photo img');
const title = document.querySelector('.title');
const social = document.querySelector('.social');
const info = document.querySelector('.info h4');
const profile = document.querySelector('.profile');

// 2nd step - Moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// 4th step - Adding animation in
container.addEventListener('mouseenter', e => {
    card.style.transform = "none";
    // Popout animation for all items
    photo.style.transform = "translateZ(50px)";
    title.style.transform = "translateZ(50px)";
    social.style.transform = "translateZ(50px)";
    info.style.transform = "translateZ(50px)";
    profile.style.transform = "translateZ(50px)";
});

// 3rd step - Removing animation in
container.addEventListener('mouseleave', e => {
    card.style.transform = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/* 1st step - Movement animation to happe
 const card = document.querySelector('.card');: This line assigns the current document's first element with the class 'card' to the variable card.
 const container = document.querySelector('.container');: In a same manner, this line assigns the first element in the document with the class 'container' to the variable container.

 2nd step - Moving animation event
 Event Listener: The code sample listens for the mousemove event on a container element by using the addEventListener function.
 Mouse Coordinates: It determines the mouse pointer's distance along the x and y axes from the window's center.
 Transformation: Using the computed mouse coordinates, the transform property rotates the card element along the x and y axes.

 3rd step - Removing animation in
 Event Listener: To add an event handler to the mouseleave event on the container element, use the addEventListener function.
 The CSS transform feature enables elements to be rearranged in both two and three dimensions. It is utilized to rotate the card element in this instance.
 Template Literals: To enable embedded expressions like ${expression}} within a string, template literals are denoted by the backticks ().

 4th step - Adding animation in
 This code snippet's main idea is event handling. To keep an eye out for the mouseenter event on a particular container, use the addEventListener function. A set of changes are performed to different items inside the container when the mouse enters it, creating an eye-catching hover effect.

 5th step - all items
 Document Object Model (DOM): A tree of programmatically manipulable objects serves as the DOM's representation of a document's structure.
querySelector(): This function lets you choose the first element in the document that matches a given CSS selector.
 */
