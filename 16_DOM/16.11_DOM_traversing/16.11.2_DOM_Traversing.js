// how to know what is the root node of html document
const rootNode = document.getRootNode();
console.log(rootNode); // output: #document


// how to know the child element of root node
console.log(rootNode.childNodes); //output : NodeList(2) [<!DOCTYPE html>, html]


// how we can get the childNodes of root node which is a NodeList basically
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode); // <!DOCTYPE html>
const htmlElementNode1 = rootNode.childNodes[1];
console.log(htmlElementNode1);
/*
output:
<html lang="en">
    <head>...</head>
    <body>...</body>
</html>
*/ 


// how to know the childNode of root element html
// browser ignored the new line and space just after the <html> element and before closing </html> element bcz these newline and space have no importance
// but whatever the newLine and space is present inside head, body these are having the importance 
const childNode_htmlElement = rootNode.childNodes[1];
console.log(childNode_htmlElement.childNodes); // output: NodeList(3) [head, text, body]

// printing the childNode of root element 
const headElementNode = childNode_htmlElement.childNodes[0];
const textElementNode = childNode_htmlElement.childNodes[1];
const bodyElementNode = childNode_htmlElement.childNodes[2];
console.log(headElementNode);
/*
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Traversing</title>
    <script src="../16_DOM/16.12_DOM_Traversing.js" defer></script>
</head>
*/
console.log(textElementNode); // #text
console.log(bodyElementNode);
/*
<body>
    <div class="container">
        <h1>Heading</h1>
        <p>some useful information</p>
    </div>
</body>
*/



// if we want to see the parentNode of any childNode 
console.log(headElementNode.parentNode); 
/*
output:
<html lang="en">
    <head>...</head>
    <body>...</body>
</html>
*/ 


// sibling relationship of childNode of rootElement
console.log(headElementNode.nextSibling); //#text


// what is inside #textNode ??
// #text is having "\n  "  means newLine and space

// browser by default set the white space property as normal for all the html elements
/*
<style>
    *{
        white-space: normal; // it will ignore the white space and new line
    }
</style>

// but we can change this styling
<style>
    *{
        // we will be able to see the white-space by using pre
        white-space: pre; // pre will not ignore the white space and new line
    }
</style>
*/



// nextElementSibling will ignore the next sibling of head i.e,. #text 
// nextElementSibling  will give the next to next sibling of head
console.log(headElementNode.nextElementSibling); 


// to see the childNode of headElement
console.log(headElementNode.childNodes); // output: NodeList(9) [text, meta, text, meta, text, title, text, script, text]





/*
<body>
    <div class="container">
        <h1>Heading</h1>
        <p>some useful information</p>
    </div>
</body>
*/

// Task : select <h1></h1> then go to its parentNode and then change the bgColor and color of the text
const h1 = document.querySelector("h1");
const h1parentNode = h1.parentNode;
h1parentNode.style.backgroundColor = "red";
h1parentNode.style.color = "yello";
console.log(h1parentNode);


// Task : change the bgColor of parent of <h1></h1> parent 
// const body = h1.parentNode.parentNode;
// body.style.backgroundColor = "black";
const parent_h1parentNode = h1parentNode.parentNode;
parent_h1parentNode.style.backgroundColor = "black";
console.log(parent_h1parentNode);


// we can also directly select the body tag of html document
const body = document.body;
body.style.backgroundColor = "black";


// we can apply querySelector to any element of html document
const head = document.querySelector("head");
const title = head.querySelector("title");
console.log(title); // title or <title>DOM Traversing</title>
console.log(title.childNodes); // NodeList [text]


// if we don't want #text whenever we want to know the childNode of any parent element
const divContainer = document.querySelector(".container");
console.log(divContainer.childNodes); // NodeList(5) [text, h1, text, p, text]
console.log(divContainer.children); // HTMLCollection(2) [h1, p]

