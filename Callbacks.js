/* 
CALLBACKS:
    * Callbacks in javascript means calling a function from another function.
    * As we know in JS functions are first class citizen, so we can use function as argument inside another function.
    * Callbacks are functions passed as arguments to another function.
    * Example: This is example of synchronous callback.
*/

function firstFunc(callback) {
  console.log("x");
  callback();
}

function callbackFunc() {
  console.log("y");
}

firstFunc(callbackFunc);

/* 
    setTimeOut: It's a type of callback function which performs asynchronous callback.
    It means that, it diesn't block main thread of execution.
*/

setTimeout(() => {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

function y() {
  console.log("y");
}

x(y);
