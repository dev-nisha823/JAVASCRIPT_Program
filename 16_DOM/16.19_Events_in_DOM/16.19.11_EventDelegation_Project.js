// Task : add new todo to form todo and if it done strike the task and click on remove to remove and click on add to add todo

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // preventDefault will prevent from refreshing the page again and again when we submit the form by clicking the Add Todo
    // print the input text value on console
    // console.log(todoInput.value);
    const newTodoText = todoInput.value;

    // add these newTodoText inside newLiItem
    const newLiItem = document.createElement("li");

    const newLiInnerHTML = 
            `<span class="text">${newTodoText}</span>
                <div class="todo-buttons">
                    <button type= "button" class="todo-btn done"> Done</button>
                    <button type= "button" class="todo-btn remove">remove</button>
                </div>`;
    // set the newLiItem innerHTML equal to newLiInnerHTML
    newLiItem.innerHTML = newLiInnerHTML;

    // append the newLiItem to ul whose class is todo-list
    todoList.append(newLiItem);

    // clear the value from input form
    todoInput.value = "";
});

// add event listener to todoList
todoList.addEventListener("click", (e)=>{
    console.log(e.target);
    // check if user clicked on done button
    if(e.target.classList.contains("done")){
        console.log("great !!!");
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    // check if user clicked on remove button
    if(e.target.classList.contains("remove")){
        console.log("you want to remove todo");
        const targetLi = e.target.parentNode.parentNode;
        targetLi.remove();
    }
});

