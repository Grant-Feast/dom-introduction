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
let headingColor = document.querySelector('#heading').style.color = 'blue';