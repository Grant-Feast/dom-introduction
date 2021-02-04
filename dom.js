// getElementById, class & tagNname
// to get an element by it's id, use the following code.

// const heading = document.getElementById('heading');

// The same can be done with obtaining classes and tags

// const subHeading = document.getElementsByClassName('sub-heading');

// const paragraphs = document.getElementsByTagName('p');

// You can use querySelector and querySelectorAll to select different elements on the page instead of the above options.
// let checkbox = document.querySelector('input[type="checkbox"]');
// let paragraphs = document.querySelectorAll('p');

// innerText value can be used to both set and retrieve info 
// let paragraph = document.querySelector('p').innerText; // Retrieves text from the paragraph.
// let paragraghOne = document.querySelector('p').innerText = 'Ipsum' // This will change the text in the paragraph.

// .textContent will do the same a innerText but this time every peice of content will be retrieved such as bolded text.
// .innerHtml will retrieve all information including html tags.

// Attributes

// you can change an id by writing the following:

// document.querySelector('#heading').id = 'mainHeading';

// Styles can also be changed using javascript.
// let headingColor = document.querySelector('#heading').style.color = 'blue';

// Class Lists
// An element can be given a specific class by using the following:
// const h1 = document.querySelector('h1');
// h1.classList.add('purple');

// Appending a child element
// First the elements need to be created, for example if I wanted to make an image element.

// const newImg = document.createElement('img');
// newImg.src = 'http://www.todayifoundout.com/wp-content/uploads/2017/08/Queens-Guard.jpg'; // The image source is then added to the new img I created.

// You then need to declare where the new element is going to be appended to

// document.body.appendChild(newImg);

// Elements can also be removed from a page.
// const removeImg = document.querySelector('img');
// removeImg.remove();

// The onclick property
// const btn = document.querySelector('#btn');
// btn.onclick = function() {
//   console.log('You clicked me!!');
// }

// Another property that can be used is the addEventListener, this gives us more control over the element which is being clicked.
// const hello = document.querySelector('#hello');

// hello.addEventListener('click', function() {
//   console.log('Hello!');
// })

// Keyboard events
// const input = document.querySelector('#input');

// input.addEventListener('keydown', function(e) {
//   console.log(e.key);
//   console.log(e.code);
// })

//You can use aswitch statement instead of an if/else statement to print statements to the console.

// window.addEventListener('keydown', function(e) {
//   // e.code will print which key has been pressed by the user, and print ignored if something else is pressed down.
//   switch(e.code) {
//     case 'ArrowUp': //ArrowUp is the code of the key you want to be recognised.
//       console.log('up!');
//     break;
//     case 'ArrowRight':
//       console.log('right!');
//     break;
//     case 'ArrowDown':
//       console.log('down!');
//     break;
//     case 'ArrowLeft':
//       console.log('left!');
//     break;
//     default: 
//       console.log('ignored!');
//   }
// })

// //Form Events
const commentForm = document.querySelector('#commentForm');
const commentContainer = document.querySelector('#comments');

//Add an eventListener which detects when the user has clicked on the submit button of the form.
commentForm.addEventListener('submit', function (e) {
  //This allows you to grab the content which the user has input into the form.
  e.preventDefault();
  // using the value of the name of the inputs to grab the info a user has placed.
  const usernameInput = commentForm.elements.username;
  const commentInput = commentForm.elements.comment;
  addComment(usernameInput.value, commentInput.value);
  // Clear the inputs once the comment has been submitted.
  usernameInput.value = '';
  commentInput.value = '';
});

// Create a new element with the users input
const addComment = (username, comment) => {
  const newComment = document.createElement('li');
  const bold = document.createElement('b');
  // Place the username within the bold element.
  bold.append(username);
  // Place the bolded username into the new li element.
  newComment.append(bold);
  // Place the users comment into the new li element.
  newComment.append(`- ${comment}`);
  //Prevent the page from disappearing once the form has been submited.
  commentContainer.append(newComment);
}

commentContainer.addEventListener('click', function (e) {
  // If the nodeName of the element the user clicks on is the same as li, it will be removed.
  e.target.nodeName === 'LI' && e.target.remove();
})

// Using input to update something as you are typing into an input

// const input = document.querySelector('#input');
// const h1 = document.querySelector('h1');

// // An event listener which changes the text of the h1 if the user starts to type into the input.
// input.addEventListener('input', function() {
//   if(input.value === '') {
//     h1.innerText = 'Introduction To The Dom';
//   } else {
//     h1.innerText = `Welcome, ${input.value}`;
//   }
// })















































































