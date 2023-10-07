// some old methods to support poor IE
// appendChild
// insertBefore
// replaceChild
// removeChild

/*
<section class="section-todo">
    <h2>Your Plan for Today ???</h2>
    <form class="form-todo">
        <input type="text" id="text" placeholder="Add Todo"/>
        <input type="submit" value="Add Todo" />
    </form>
    <ul class="todo-list">
        <li>todo1</li>
    </ul>
</section>
*/


// appendChild
// create an html element 
const newHeader = document.createElement("h1");
newHeader.textContent = "Hello H1 Tag";
newHeader.style.color = "white";
// use appendChild to append newly created html element
const header = document.querySelector(".header");
header.appendChild(newHeader);




// use insertBefore -> we need the reference of parent node
// inserting div tag before form whose class is "form-todo"
const sectionTodoParent = document.querySelector(".section-todo");
const formTodoReferenceNode = document.querySelector(".form-todo");
const newDiv = document.createElement("div");
newDiv.textContent = "New Div";
// insert newDiv before formTodo in sectionTodo
// syntax : parentNode.insertBefore(what to insert, before which element);
// sectionTodoParent.insertBefore(newDiv, formTodoReferenceNode);




// replaceChild ->
// replace formTodoReferenceNode with newDiv from sectionTodoParent
// sectionTodoParent.replaceChild(newDiv, formTodoReferenceNode);


// removeChild ->
// this code will remove the whole form whose class is form-todo
// sectionTodoParent.removeChild(formTodoReferenceNode);
