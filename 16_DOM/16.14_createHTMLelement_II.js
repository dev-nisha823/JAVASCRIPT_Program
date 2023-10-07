// there are other methods which is used to createHtml element
// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin
// beforeend
// afterend

// there is no need to create the html element we can directly insert it using above command

// insert any html element just before starting the section whose class is section-signup
// step1 : first select the element where you have to insert 
const sectionSignup = document.querySelector(".section-signup");
// step2 : now use insertAdjacentHTML
sectionSignup.insertAdjacentHTML("beforebegin", "<article>Newspaper Article</article>");
sectionSignup.insertAdjacentHTML("afterbegin", "<article>Newspaper Article</article>");
sectionSignup.insertAdjacentHTML("beforeend", "<article>Newspaper Article</article>");
sectionSignup.insertAdjacentHTML("afterend", "<article>Newspaper Article</article>");

// this method is hectic to use 
