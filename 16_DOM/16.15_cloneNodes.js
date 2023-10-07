// clone nodes

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
// li is only node here so either it will append or prepend but not both.
ul.append(li); // append here not working bcz we have written it first means before prpend.
ul.prepend(li); // here it is prepending means adding the li to starting


// now we want that "new todo" should appear before and after both
// so we will clone li Node
const li2 = li.cloneNode(true); // deep cloning is happening
ul.prepend(li2)
