// intro to arrays :-

// 1. Array is of reference type or array is an object.
//    reference type means object
// 9. array is mutable.
// 2. It is the ordered collection of items/elements(arranged sequentially) (index/position of elements).
// 3. It can store large amt of data in the form of different datatype such as
//    string,number,floating point,null,undefined,characters,white space
// 4. Array can store an Array means array within an array.
// 5. Access an array element using its index value like 
//    name_of_array[index_no] must be in square bracket.
// 6. Array.isArray(name_of_array) is the method to know whether array is an actual array or not.
// 7. Object literal -> 
// 8. push(nameOfElement) -> to add elements in array but at last index. 
//            name_of_Array.push(elements_name);
//            push method change the original array.
// 10. pop() -> pop not only remove from the last in an array but also return that removed element so that we can use it anywhere.
// 11. unshift(nameOfElement) -> to add the element in starting of an array.       
//                we can add more than one element at a same time in an array.
// 12. shift() -> remove the element from starting of an array.
//                it also return the removed element like pop method does.
// 13. push and pop() has faster execution time than shift or unshift bcz they are adding and removing the element from last.
//     whereas shift() and unshift has to first shift all the elements of an array one index ahead to remove or add the element in an array which makes the execution time more.       


let arr = [1,"nisha",2.3,null,undefined,'A',""]; // mixed array

console.log(Array.isArray(arr)); //true means arr is an array
console.log(typeof arr); //object
arr[6] = 2.2;
console.log(arr);

let obj = {}; //object literal
console.log(typeof obj);
console.log(Array.isArray(obj));//false means object is not an array but array is an object bcz array is of reference type.


let arr1 = [];
console.log(typeof arr1);
console.log(Array.isArray(arr1));

//push method

arr.push("Nisha Rahul Manipal");
console.log(arr);

//pop method
// console.log(arr.pop()); // return Nisha Rahul Manipal 
// console.log(arr);
let poppedArrayElement = arr.pop();
console.log(`Popped Array Element is ${poppedArrayElement}`);



//unshift
arr.unshift("Hello",400,'ABC');
console.log(arr);

//shift
let removedElement = arr.shift();
console.log(`Removed Element from the start in an array is ${removedElement} &`,`Final Array will be ${arr}`);





// using const to create an array 
// this oldArray is the main array which is stored inside heap where the oldArray address is stored.
// when we try to push any new element it will first point to the same address where the main array is stored and add one extra element.
// but not show any error bcz the address is not changed.

const oldArray = [1,2,3,4,5];
// oldArray = [7,8,9,10]; // error :  Assignment to constant variable
// in const we can't change the value  but we can push the value to it.
oldArray.push(6); // not give any error
console.log(oldArray); //[ 1, 2, 3, 4, 5, 6 ]




