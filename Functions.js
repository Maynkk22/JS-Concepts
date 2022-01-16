/* 
Functions are the building block of the programs.
A function contains a block of code, which has set of statements, function name, parameters and return statement.
It's also called a subprogram
Default return value is undefines
*/

//Function Declaration or function expression

function sayHello() {
  let name = "mayank";
  console.log(name);
}

sayHello();

/*
    Function Expression : It can contain a name but not necessary. 
    If you try to call nameFunc() instead of decFunc() in the below code then we will get "Reference Error" : not defined.

*/

// Function expression with a name

const decFunc = function nameFunc() {
  console.log("function without name");
};

decFunc();

// Function expression without a name

const secFunc = function () {
  let num = 23;
  console.log(num);
};

secFunc();

//Anonymous Function : A Function without name is called anonymous function.

const anonyFunc = function () {
  console.log("Hello i'm an anonymous function");
};

anonyFunc();

/* The main difference between function statement and function expression is that function statement contains normal way of 
    defining the function, i.e. function with name. 
    But in case of function expression the function is assigned like a value to a variable

    Also the difference is between Hoisting.

    Function declaration or statement is hoisted like a normal function is hoisted.
    But Function statement are hoisted like a variable, because it is assigned to a variable like a value.
*/

/*
    Arrow Function : It's introduced in es6. 
    It's a way of writing function with a concise body.
    Function name, parameters are optional in arrow function.
*/

() => {
  console.log("Hello, iam arrow function");
};

// but we wont be able to call it, so we assign it to a variable

let arrowFunc = () => {
  console.log("Iam arrow function in expression form");
};

arrowFunc();

/*
Differences between an arrow function and normal function are:
    1. Arrow function does not have it's own 'this'. That means it will not be able to access the values in it's immediate
    scope, but will be able to access the data from it's outer scope.
    2. Arrow function does not have access to call, bind, apply as they take value from our current execution scope, but arrow
    function have access to it's outer execution scope.
    3. It does not have arguments accessing power, like we do in normal function.
    4. Can't be declared sing new keyword as constructors.
*/

/*
1. Using 'this' in arrow function
The output is such that because arrow function access outer lexical scope using this, which is this case is window object.
Whereas normal function access current lexical scope using this keyword which in this case is Object 'obj'
*/

let obj = {
  i: 10,
  b: function () {
    console.log(this.i, this);
  },
  c: () => {
    console.log(this.i, this);
  },
};

obj.b(); // 10 { i: 10, b: [Function: b], c: [Function: c] }
obj.c(); // undefined window{}

/*
2. Access to call, bind and apply.
Call, bind and apply, these work on the concept of scope, as they were used to allow methods to execute in different scopes.
When we use arroe function, it doesn't access current lexical scope, instead it refers outer lexical scope which produce different
output than expected.
The output is like that because when using normal function, this goes to newObj to access value of num, but in case of arrow
function, this.num refers to num created in window obj and not the one in newObj because arroe function's this refer to outer
lexical environment.
*/

let newObj = {
  num: 100,
};

window.num = 200;

let addUsingNF = function (a, b) {
  return this.num + a + b;
};

let addUsingAF = (a, b) => {
  return this.num + a + b;
};

console.log(addUsingNF.call(newObj, 10, 20)); // output 130
console.log(addUsingAF.call(newObj, 10, 20)); // output 230

// Main usage of arrow function is with DOM level methods like setTimeout, setInterval.

// Functions can be passed as parameters and also can be returned from another function.

// Case 1: Function passed as parameter

function passedAsParam(param) {
  return param;
}

function xyz() {
  console.log("Iam called from function xyz");
}

passedAsParam(xyz());

// Case 2: Function returned from another function

function returnFunc() {
  return function () {
    console.log("Hello, Iam returned from another function");
  };
}

returnFunc()();
