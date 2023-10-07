
// constant which value will never change. eg: value of pi

const d = 20;
// d = 40; throw error like assignment is already done
//const d = 30; throw error like d is already declared.
console.log(d);
console.log(d+2); // 22


// CONST is a CONSTANT whose value never change even CONST can't be updated or redeclared
const c = 10;
//c = 20;  throw error bcz assignment to constant variable can't be happen again and again once it is given a value it will not change : updation rules
const e = 10;
// const c = 20; throw error that identifier 'c' has already been declared.
console.log(c); // 10
console.log(e); // 10

// const e; throw error bcz const must be initialized we can't leave it like a variable


const KEY = 'coding_ninjas';
if (true) {
    const KEY = 'ES6'; // KEY is already declared so, it's value will never be read.
}
console.log(KEY);// coding_ninjas bcz (const declaration creates a constant whose scope can be either global or local to the block in which it is declared. The scope of the inner KEY is only inside the "if" block. That's why the output is 'coding_ninjas.)



