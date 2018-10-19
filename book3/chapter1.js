// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const sectionE1 = document.querySelector("section");


sectionE1.textContent = 'Welcome to Nicks blog!'
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const headerE1 = document.querySelector(".article__header");

headerE1.classList.remove("article__header");

headerE1.classList.add("article__header" + "\xa0" + "important");

// Obtain a reference the element with a class of dashed and remove it.
const asideE1 = document.querySelector('aside')

asideE1.classList.remove("dashed")

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it
const footerE1 = document.querySelector('.article__footer');

footerE1.classList.remove("article__footer");

footerE1.classList.add("goldenrod");

