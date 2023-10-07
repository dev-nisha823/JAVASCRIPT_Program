// clone using Object.assign


// since object is stored inside heap memory and 
// this heap memory has the address of object.
const obj = {
    key1 : "value1",
    key2 : "value2",
};
// having same address to both the objects
const obj2 = obj;
console.log(obj);// { key1: 'value1', key2: 'value2' }
console.log(obj2);// { key1: 'value1', key2: 'value2' }

// when we try to add any key-value pair to obj it will be automatically added to obj2
// bcz of same reference in heap memory
obj.key3 = "value3";
console.log(obj2); //{ key1: 'value1', key2: 'value2', key3: 'value3' }

// if we want to remove this effect then use spread operator means cloning or creating a new object
const obj3 = {...obj};
console.log(obj3); // { key1: 'value1', key2: 'value2', key3: 'value3' }
// 2nd method
const obj4 = Object.assign({},obj);// empty object and then which object key-value pair you want to add
obj.key4 = "value4";
console.log(obj);  // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }
console.log(obj4); // { key1: 'value1', key2: 'value2', key3: 'value3' }