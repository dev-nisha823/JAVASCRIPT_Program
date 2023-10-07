// spread operator in array and objects

// spreading string using spread operator - strings are iterable
const array_string = [..."abcde"];
console.log(array_string); // [ 'a', 'b', 'c', 'd', 'e' ]

const array_number = [..."12345"];
// const array_number = [...123456]; //numbers are not iterable
console.log(array_number);






//-----------------------spread operator in objects------------------------

const obj1 = {
    key1 : "v1",
    key2 : "v2",
}

const obj2 = {
    key1 : "v5",
    key3 : "v3",
    key4 : "v4",
}

// cloning of an object 
// newObject1 will first spread obj1 and then obj2 that's y key1 of obj1 will be override by the key1 of obj2 
const newObject1 = {...obj1, ...obj2};
console.log(newObject1); // { key1: 'v5', key2: 'v2', key3: 'v3', key4: 'v4' }
// similarly newObject2 will first spread obj1 then obj2 but there will be only one key1 
// since obj1 spread first that's y key1 of obj2 will override the key1 of obj1

// similarly obj2 spread first then key1 of obj1 will override key1 of obj2
const newObject2 = {...obj2, ...obj1};
console.log(newObject2); // { key1: 'v1', key3: 'v3', key4: 'v4', key2: 'v2' }

// adding new key to newobject3
const newObject3 = {...obj2, ...obj1, key6 : "v6"};
console.log(newObject3); //{ key1: 'v1', key3: 'v3', key4: 'v4', key2: 'v2', key6: 'v6' }


// spreading of string inside object
const spreading_object_string = {..."abc"};
console.log(spreading_object_string); // { '0': 'a', '1': 'b', '2': 'c' }

// spreading of an array inside object
const spreading_array_in_object = {...["item1","item2","item3","item4","item5"]};
console.log(spreading_array_in_object);  // { '0': 'item1', '1': 'item2', '2': 'item3', '3': 'item4', '4': 'item5'}

// using spread operator to find out the index of each character of string inside objects
const finding_index_of_characters = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(finding_index_of_characters ); // output

/* {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  '3': 'd',
  '4': 'e',
  '5': 'f',
  '6': 'g',
  '7': 'h',
  '8': 'i',
  '9': 'j',
  '10': 'k',
  '11': 'l',
  '12': 'm',
  '13': 'n',
  '14': 'o',
  '15': 'p',
  '16': 'q',
  '17': 'r',
  '18': 's',
  '19': 't',
  '20': 'u',
  '21': 'v',
  '22': 'w',
  '23': 'x',
  '24': 'y',
  '25': 'z'
}

*/