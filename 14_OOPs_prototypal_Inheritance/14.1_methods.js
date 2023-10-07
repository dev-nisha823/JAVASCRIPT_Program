// methods
// function inside object

const Recipe = {
    Name : "Mango Juice",
    Ingredients : ["Mango","Milk","sugar","ice cubes","cherry"],
    Process : function(){
        console.log(
            `step 1 : Put mango pulp in mixer
             step 2 : pour milk & sugar into mixer
             step 3 : then grind all substances
             step 4 : put cherry over it`
        );
    },
}
// here we are accessing the property process 
console.log(Recipe.Process); // return function
/*
ƒ (){
    console.log(
        `step 1 : Put mango pulp in mixer
         step 2 : pour milk & sugar into mixer
         step 3 : then grind all substances
         step 4 : put cherry over it`
    );
}
*/
Recipe.Process(); // will print what is written inside console.log


const person = {
    name : "nisha",
    age : 23,
    about : function(){
        console.log("person name is nisha and age is 23");
    }
};
person.about(); // person name is nisha and age is 23
// if we change the person name it will not change in the function bcz it is hardcoded.
// so how we can do it in js we will use template string/literals

const person1 = {
    firstname : "harsh",
    age : 23,
    about : function(){
        // console.log(`person name is ${firstname} and age is ${age}`); //give error
        // if we change name and age it will be changes in function as well
        console.log(`person name is ${this.firstname} and age is ${this.age}`);
        console.log(this); // return the object ---> { firstname: 'harsh', age: 23, about: [Function: about] }
    }
};
person1.about(); //person name is harsh and age is 23

// this keyword kii value hame code likhte time pta nhi chalti balki
// this keyword kii value jb hamara code run kr rha hota hain tb pta chalti hain it means runtime

/*
How above code is working ???
--> 'this' is a special keyword in js that refers to the current context or the object on which the function is invoked.
--> in object method here, 'about' key is having function as value means function is inside object that's why 'about' is object method of person1 object.
--> 'this' refers to the object itself 
--> here about is a function which is used to log information about person 'firstname' and 'age'
--> When the 'about' method is called as 'person1.about()', 'this' refers to the 'person1' object. 
--> Therefore, 'this.firstname' will access the 'firstname' property of 'person1', which is "harsh", and 'this.age' will access the 'age' property of 'person1', which is 23

--> Conclusion : 'this' is acting as an object and 'object_name.key_name' will give the value of that key which is inside that object.
*/ 

// use of this allows us to access the properties of the object on which the method is called. 
// It's a way to refer to the object itself dynamically, making the code more flexible and reusable.




// now we will define the function outside the object then use it inside the object but not directly defining it inside object as we did in previous code
function fruitInfo(){
    console.log(`${this.fruitName} is ${this.fruitSize} in size and color is ${this.fruitColor}.`);
}
const fruit1 = {
    fruitName : "Apple",
    fruitSize : "small",
    fruitColor : "Red",
    aboutFruit : fruitInfo
};
const fruit2 = {
    fruitName : "Mango",
    fruitSize : "Big",
    fruitColor : "Green",
    aboutFruit : fruitInfo
};
const fruit3 = {
    fruitName : "Orange",
    fruitSize : "Medium",
    fruitColor : "orange",
    aboutFruit : fruitInfo
};  
// rightnow this function is useless
fruitInfo(); // undefined is undefined in size and color is undefined.
console.log(fruitInfo);// print function --> [Function: fruitInfo]

// if we don't call 'about' method by using these objects then how 'this' keyword will behave
fruit1.aboutFruit(); // will only print 'fruit1' object data
// output : Apple is small in size and color is Red.
/*
why fruit1.aboutFruit() is only printing fruit1 object data ???
Reason ------>
> here 'aboutFruit' object method is called only by fruit1 not by fruit2 and fruit3
> bcz of which 'this' keyword has value fruit1 object that's why we will be able to access fruit1 property  
*/

// if we want to print fruit2 and fruit3 object data as well then 
// we have to call aboutFruit object method by using the fruit2 and fruit3 object
fruit2.aboutFruit(); // Mango is Big in size and color is Green.
fruit3.aboutFruit(); // Orange is Medium in size and color is orange.




