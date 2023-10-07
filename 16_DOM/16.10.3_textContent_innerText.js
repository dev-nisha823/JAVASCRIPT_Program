// textContent -> provides access to the text inside the element. only text, minus all tags
console.log(document.body.textContent);  // return the text inside the body tag
/*

The textContent property returns:
The text content of the element and all descendaces, with spacing and CSS hidden text, but without tags.

Hello world
Hey i am span
  hellp          para
       h ea ding
*/ 

// innerText sets or return the text content of an element
/*
The innerText property returns:
Just the text content of the element and all its children, without CSS hidden text spacing and tags, except <script> and <style> elements.
*/ 
console.log(document.body.innerText);
/*
Hello world Hey i am span

hellp para

h ea ding
*/

console.log(document.body.innerHTML);
/*
The innerHTML property returns:
The text content of the element, including all spacing and inner HTML tags.
Hello world
<span id="span"><b>Hey i am span</b></span>
<p> hellp          para
    </p><h1>h ea ding</h1>
<p></p>
*/ 