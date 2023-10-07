// closure Example
function hello(x){
    const a = "varA";
    const b = "varB";
    // if we don't give name to the function the it becomes an anonymous function(function having no name)
    return function(){
        console.log(a,b,x);
    }
}
const ans = hello("arg");
ans(); 





function myFunction(power1, power2){
    function cubeRoot(number){
        return number ** power1; // 4^3 = 64 (4 kaa cuberoot)
    }

    function squareRoot(number){
        return number ** power2;
    }
    return [cubeRoot, squareRoot];
}
const numbers = myFunction(3, 2);
console.log(numbers[0](4)); // calling cubeRoot function
console.log(numbers[1](5)); // calling squareRoot function





function myFunction2(power){
    function cube(number){
        return number ** power; // 4^3 = 64 (4 kaa cuberoot)
    }
    return cube;
}
const cubeRoot = myFunction2(3);
const result = cubeRoot(4);
console.log(result); // output: 64




