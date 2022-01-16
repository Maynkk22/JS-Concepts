/* 
Arguments are the values passed to a function, in the function call. Parameter are the values that we see in function declaration.
In JS arguments are passed by value, that means the function receives the values but does not know the location of the values.
Arguments are received like objects. It's type is also objects.
*/

function sayHello(params) {
  //body
}

sayHello(arguments);

/* 
Arguments can be converted to array using the following methods
1. using Array.from method 
2. Using spread syntax
*/

//using Array.from method
function sayMyName(a, b, c) {
  console.log(Array.from(arguments)); // [ 'abc', 'def', 'ghi' ]
}

sayMyName("abc", "def", "ghi");

// using spread syntax

function sayName(a, b, c) {
  let spreadArgs = [...arguments];
  console.log(spreadArgs);
}
sayName("abc", "def", "ghi");

// arguments have only length property and no other array methods.

function findLength(a, b, c) {
  let spreadArgs = arguments.length;
  console.log(spreadArgs); // output 3
}
findLength("abc", "def", "ghi");

console.log(window);
