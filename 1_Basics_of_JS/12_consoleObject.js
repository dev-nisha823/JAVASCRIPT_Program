console.log(console); // list all the objects inside the console
// console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
console.error("console error");
console.assert(5>56); // give assertion failed bcz 5 is not greater than 56
console.assert(5<56); // it will not give assertion failed
console.assert("error" == false);
console.assert("error" != false);
console.clear(); //Console was cleared

const obj = {
    a:1,
    b:2,
    c:3
}
console.table(obj); // it will give data in tabular form

console.warn("Smoking is injurious to health"); // it gives warning on the console in yellow triangle
console.info("Hey this is an important document"); // Hey this is an important document

// used in project 
console.time("A");
console.timeEnd("A");


