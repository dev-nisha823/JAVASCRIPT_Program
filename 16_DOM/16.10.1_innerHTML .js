// innerHTML
// whatever is written inside the Parent HTML element i.e., called as innerHTML
// we can also change the innerHTML of any parent HTML element

// innerHTML -> allows us to get the HTML inside the element as a string
// innerHTML is valid only for element nodes. for other node types we can use nodeValue or data


/*
<section class="section-todo">
    <h2>Your Plan for Today ???</h2>
        <form class="form-todo">
            <input type="text" id="text" placeholder="Add Todo"/>
            <input type="submit" value="Add Todo" />
        </form>
</section>
*/ 
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.innerHTML);
/*
output:
 <h2>Your Plan for Today ???</h2>
    <form class="form-todo">
        <input type="text" id="text" placeholder="Add Todo">
        <input type="submit" value="Add Todo">
    </form>
*/

// change the innerHTML
sectionTodo.innerHTML = "<h1> innerHTML is changed </h1>";
console.log(sectionTodo.innerHTML); // output: <h1> innerHTML is changed </h1>

// add button or anything
sectionTodo.innerHTML += "<button> Learn More </button>";
console.log(sectionTodo.innerHTML);
/*
output:  here we are adding the button in the same innerHTML that's why +=
<h2>Your Plan for Today ???</h2>
        <form class="form-todo">
            <input type="text" id="text" placeholder="Add Todo">
            <input type="submit" value="Add Todo">
        </form>
    <button> Learn More </button> 
*/
// we can't use double quotes inside double quotes normally. if we want to do we have to use \" escape character
sectionTodo.innerHTML += "<button class = \"btn\"> Learn More </button>";
console.log(sectionTodo.innerHTML); 
/*
\" ----------> "
\"content\" -----------> "content"
*/






// innerHTML to add html element 
// whever we add new html element to innerHTML then whenever browser will render our page everytime it will make that html element that we added to innerHTML which will create performance issues.
// That's why we should not use innerHTML 

// but when to use innerHTML
// When we have to change the whole innerHTML 
// but don't use to add new html element