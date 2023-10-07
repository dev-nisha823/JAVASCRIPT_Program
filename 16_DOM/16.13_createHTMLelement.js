// document.createElement()
// append
// prepend
// remove

// create new html element inside any particular html elements
const newTodoList = document.createElement("li");
console.log(newTodoList);


// there are 2 methods to create text to any html element 
// createTextNode and textContent
// if we want to add text to this li tag use append
// append always add at the last
const newTodoListText = document.createTextNode("Add the content to newTodoList");
newTodoList.append(newTodoListText);

// we can also use textContent to add text to li tag
// newTodoList.textContent = "Teach students";
console.log(newTodoList);



const newTodoList_1 = document.createElement("li");
newTodoList_1.textContent = "2nd li tag";


/*
<ul class="todo-list">
    <li>todo1</li>
</ul>
*/
// now add above new li tag to ul tag 
const todoList = document.querySelector(".todo-list");
// append add anything to the end
todoList.append(newTodoList_1);

// prepend add anything in starting
todoList.prepend(newTodoList);


// how to remove the li 
// remove the first li tag
const removeLi = document.querySelector(".todo-list li");
removeLi.remove();



// insert any html element before and after any particular  html element
// insert div before section-todo
// step1 : 1st create the element you want to add before any html element
const newDiv = document.createElement("div");
newDiv.textContent = "div tag before section-todo";
newDiv.style.textAlign = "center";
newDiv.style.fontSize = "2rem";
newDiv.style.backgroundColor = "red";
// step2: add the element using before
const sectionTodo = document.querySelector(".section-todo");
sectionTodo.before(newDiv);













