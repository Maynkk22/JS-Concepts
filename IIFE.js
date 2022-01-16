/* 
IIFE : It's immediately invocked functional expression.
It's used not to pollute global object (windows object) with many variable, instead of that we can create IIFE which is executed
     as soon as it is encountered.
It does not have any name, becasue it's not a function declaration, it's an functional expression.
It helps us in reducing unnecessary references to global object, which we will have to remove manually.
More details on https://developer.mozilla.org/en-US/docs/Glossary/IIFE
*/

//Syntax normal function

(function () {
  var a = 10;
  console.log(a);
})();

//Syntax using arrow function

(() => {
  var x = 10;
  console.log(x);
})();

// we can provide a name to the function present inside the IIFE, example

(function abc(num1, num2) {
  console.log(num1 + num2);
})(10, 20);

/* If we simply return something from IIFE, then it won't have any effect, that means we can't be able to access that return
    as it can't be accessed and then it will be garbage collected. Example
*/

(function abc(num1, num2) {
  return num1 + num2;
})(10, 20);

// Output is nothing

/* But if we assign IIFE to a variable and then return something from it, then that variable will be having access to the return
  value and so we can use it. More details refer this https://stackoverflow.com/questions/12023167/return-from-an-anonymous-immediately-invoked-function-expression-where-does-it
    Example:
*/

let sum = (function abc(num1, num2) {
  console.log(num1 + num2);
})(10, 20);

console.log(sum);
// output is 30

// If we try to check whether an variable delcared inside IIFE is present inside global object, than we get UNDEFINED.

(() => {
  var b = 10;
})();

console.log(window.b);

// If we just write IIFE without invoking braces, then we get function body returned. Example

() => {
  console.log("hello");
};
