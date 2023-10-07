// static list vs live list
/*
<ul class="list">
       <li class="list-item">Item1</li>
       <li class="list-item">Item2</li>
       <li class="list-item">Item3</li>
       <li class="list-item">Item4</li>
       <li class="list-item">Item5</li>
</ul>
*/


// querySelectorAll will give static list
// querySelectorAll give NodeList
const listItem = document.querySelectorAll(".list li");
console.log(listItem); // NodeList(5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]
const sixthLi = document.createElement("li");
sixthLi.textContent = "Item6";
const ul = document.querySelector(".list");
ul.append(sixthLi);
// here Nodelist is static despite of adding the sixthLi to ul NodeList is 5 only



// getElementBySomething will give live list
// getElementBySomething will give HTMLCollection
// how many li tag inside the ul whose class is "list"
const listItems = ul.getElementsByTagName("li");
console.log(listItems); // HTMLCollection(6) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item, li]


