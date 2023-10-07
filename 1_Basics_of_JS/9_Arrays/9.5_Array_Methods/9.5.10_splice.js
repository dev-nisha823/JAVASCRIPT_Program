// splice method -->
// startindex , delete , insert_element
// splice is used to either to delete or insert in an array.
// splice() changes the original array and returns a new array


const myArray = ["item1" , "item2" , "item3" , "item4", "item5"];
// syntax of delete => .splice(start index of item which you want to delete, how many items you want to delete, which element you want to insert)
// delete "item4" from an array ---->
const deletedItem = myArray.splice(3, 1);
console.log(myArray); //[ 'item1', 'item2', 'item3', 'item5' ]
// it returns the deleted item
console.log(deletedItem); //[ 'item4']


// insert an element
// syntax-> .splice(on which index you want to insert , how many items want to delete, what you want to insert)
const insertedItem = myArray.splice(2, 0, "Inserted element");
// it will not return the inserted element 
console.log(insertedItem); // []
console.log(myArray); //[ 'item1', 'item2', 'Inserted element', 'item3', 'item5' ]




//myArray becomes [ 'item1', 'item2', 'Inserted element', 'item3', 'item5' ] 
// how we can perform insert and delete at the same time
const insert_delete = myArray.splice(1,2,"Inserted element 2nd","inserted element 3rd");
console.log(insert_delete); // [ 'item2', 'Inserted element' ]
console.log(myArray); // ['item1', 'Inserted element 2nd', 'inserted element 3rd', 'item3', 'item5']

