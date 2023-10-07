// Computed properties 

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// create an object by using these key-value variable.
const object = {
    // 1st method -> computed properties means putting key variable inside square bracket notation[]
    [key1] : value1,
    [key2] : value2,
};
console.log(object);

// 2nd method -> by adding these key value pair to object directly
object[key1] = value1;
object[key2] = value2;
console.log(object);


// we can't write like this 
// TypeError: object is not a function
// console.log(object(`${key1} : ${value1}, ${key2} : ${value2}`));



