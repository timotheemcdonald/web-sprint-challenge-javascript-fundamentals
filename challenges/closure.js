// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!"; 


  function nestedFunction() {
    console.log(internal);
   
  };
  nestedFunction();
}
myFunction();

// Explanation: 

/* Internal and nestedFunction are both inside of myFunction. myFunction can access internal because they are both in the same scope, or lexical environment. They are one layer deep inside of myFunction. However, if the positions were switched, and const internal was on line 13, and console log was on line 10, the console log wouldn't be able to access internal, since scope goes outwards and not inwards. This is Closure.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function counter() {
    let count = 0;
    return function() {
      count = count+1;
      return count;
    }
};

const newCounter = counter();

function summation(attribute) {
  console.log(newCounter());
for (i = 0; i < attribute; i++){
  newCounter()+newCounter();
}
 return newCounter();
}


console.log(summation(4));