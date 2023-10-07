// filter method - it is an array method
// filter callback function should always return either tru of false means boolean values.
// filter() function also returns an array.
// filter() doesn't change the original array but return the new array.

const numbers = [1,5,2,6,3,9,0];
// callback function
// it will check whether the number in numbers_array is odd or even
const isEven = function(number){
    return number%2 === 0;  // for even
   // return number%2 !=== 0; // for odd
}
const evenNumber = numbers.filter(isEven);
console.log(evenNumber); // [ 2, 6, 0 ] return the even number from numbers array.


// we can also write the above callback function inside filter as well
const oddNumber = numbers.filter((number) => {
    return number%2 !== 0 ;
});
console.log(oddNumber); //[ 1, 5, 3, 9 ]