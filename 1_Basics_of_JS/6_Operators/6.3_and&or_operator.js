// and & or operator

// to check more than one condition we will use and & or operator

/* in case of and operator when both the condiiton will be true then only overall condition will be true
   otherwise overall condition will be false when one of them will be false.
*/


/*
  in case of OR operator: 
  1> when both the condition will be false then only overall condition will be false otherwise
  2> overall condition will be true when one of the condition is true
*/ 

let age  = 22;
let firstName = "Nisha";

if(firstName[0] === 'N' && age > 22 ){
    console.log(`True`)
}else{
    console.log(`False`); //Output
}

if(firstName[0] === 'N' || age > 22 ){
    console.log(`True`) // True
}else{
    console.log(`False`); 
}

