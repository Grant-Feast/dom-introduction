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

const newImg = document.createElement('img');
newImg.src = 'http://www.todayifoundout.com/wp-content/uploads/2017/08/Queens-Guard.jpg'; // The image source is then added to the new img I created.

// You then need to declare where the new element is going to be appended to

document.body.appendChild(newImg);

// Elements can also be removed from a page.
const removeImg = document.querySelector('img');
removeImg.remove();



























