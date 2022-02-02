/* 
    CURRYING:
        * It is a technique or functionality to convert a function with multiple arguments into multiple functions with single
            arguments.
        * Currying is a useful technique as it makes our code refactor and easy to understand.
        * It also increases the efficiency of our code.
        * It can be implemented through closure or using bind.
*/

/* 
    Cosnider the following block of code without using currying.
*/

function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4));

/*
    Currying example using closure:
*/

function first(a) {
  return function (b) {
    return a * b;
  };
}

console.log(first(2)(3)); // 6

let multiplyValue = first(3);
console.log(multiplyValue(5)); // 15

/* 
    Currying using bind method.
*/

function addNums(a, b) {
  return a + b;
}

let giveNums = addNums.bind(this, 4);
console.log(giveNums(6));
