/* SCOPE */

/*
    Scope refers to the accessibility of a variable inside a code or program.
    For example a variable declared inside a function can only be accessed inside that function not outside of it.
*/

/*
    In javascript we have 3 tyoes of scopes:
        1. Global Scope
        2. Functional Scope
        3. Block Scope.
*/

/*
    GLOBAL SCOPE:
        Global scope refer to the scope of variables which are declared in global space.
        They can be accessed anywhere inside the code, by any functional or block.
        Lifetime: Their lifetime is untill the browser or window is closed.
        Example:
 */

let globalNum = 23;
console.log(globalNum);

function checkNum() {
  let funcNum = 21;
  console.log(funcNum);
  console.log(globalNum);
}

{
  let blockNum = 20;
  console.log(blockNum);
  console.log(globalNum);
}

checkNum();

/* 
    Function Scope:
        Function scope refers to the accessiblity of a variable inside a function.
        variables declared using the 'var' keyword have functional scope.
        These can be accessed only inside the function.
        Lifetime: Their lifetime is from start to the end of the function.
        Example:
*/

let globalNum = 23;

function checkNum() {
  let funcNum = 21;
  console.log(funcNum); //21
  console.log(globalNum); //23
}
console.log(funcNum); // throws reference error as funcNum is delcared inside the function so it can only be accessed inside that.

checkNum();

/*
    Block Scope:
        Block scope refers to the accessibility of the variable inside a block specified by curly braces '{}'.
        It was not initially present with JS, but intoduced in ES6 with let and const variable declaration.
        It's used by let and const.
        Lifetime: Their lifetime is from start to end of the block. Outside that it throws reference error.
*/

let globalNum = 23;

{
  let blockNum = 20;
  var num = 21;
  console.log(blockNum); // 20
  console.log(globalNum); // 23
  console.log(num); // 21
}

console.log(num); // 21
console.log(blockNum); // referenceError.

/*
    NOTE:
        1. When we try to acess function scope variable outside their function, then we get only error as function call is 
        encountered first before printing the value.
        2. But in case of Block scope variable accessed outside their block, we get the output of the statements which are
        before accessing the variables declared inside the scope.
*/

/* 
    GLOBAL LEAKS:
        * It refers to the leakage of memory. 
        * It happens when assign a variable a value inside a function without delcaring it, so when we call the function, JE 
        search for that variable declaration inside the function, it don't find anything there. Then it searches in global scope
        where too it dosen't find.
        So finally it delcares the variable in global scope on it's own.
        * Example:
*/

function checkLeak() {
  counter = 10;
  console.log(counter);
}

checkLeak(); // 10

window.checkLeak.counter; // undefined
window.counter; // 10
