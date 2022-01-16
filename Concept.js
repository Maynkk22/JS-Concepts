// Information about functional progamming

// Functional programming is the type of programming in which all the concepts are mostly applied using functions.

//Imperative and Declarative Code Writing

/*
Imperative Function:
    Imperative code writing contains all the steps used to solve an issue or write a program.
    It includes, step by step procedure used to solve the issue.
    Example, consider the following code to find whether square of a number is even or not.
    Here we can see that we have gone step by step to find whether the number is even or not.
*/

const num = 5;

const numSquare = num * num;

let isEven;

if (numSquare % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}

console.log(isEven);

/*
Declarative Programming: It means that we have a concise way of solving an issue or program.
It basically gives the developer the result that they want instead if going through that step by step.
Example: Consider the same code to find the square of a number is even or not
*/

const isSquareEven = (num) => (num % 2 === 0 ? true : false);
console.log(isSquareEven(5));

//Pure and Impure Functions

/*
Pure Functions: Pure functions are the one whose value does not change if we provide the same arguments every time.
That means if the arguments are same than they produce the same output.
Their output does not depend on any external data, so if that data changes than their output changes.
*/

function findSum(num1, num2) {
  return num1 + num2;
}

console.log(findSum(5, 6));

/*
Impure Functions: They are the functions whose output does not remain constant even if we provide same set of arguments 
    everytime to the functions.
Their value depends on the external data which can modify the output.
In the given example below, we can see that even if we pass same value eveytime to the function, if the value1 is modified than
    the output will change. So that means the output does not entirely depends on the addNums function, but on value1 variable too.
*/

let value1 = 5;

function addNums(num) {
  console.log(value1 + num);
}

addNums(4);

//Immutablity and Mutablity

/*
Mutable : It refers to the values that can be mutated easily. 
That means if the same set of data is used by a many functions in programs than if somewhere the data is modified that it's
    modified for everyone.
This is the wron approach and we shouldn't use it as it may create ambiguity.
Consider the following examples: In that we have name declared inside the person1 obj and then we passed it's value to person2
Now both person1 and person2 have reference to same set of data, so if anywhere the data is modified it's modified for both.
It's an wrong approach
*/

const person1 = {
  name: "mayank",
  age: 23,
};

const person2 = person1;

person2.name = "simran";

console.log(person1);
console.log(person2);

/*
Immutable: It's a way through which we assign values in such a way that, it's always unique to each one of them, and in case the
    value is changes or modified by one function or variable, than it's only  changes for it not for all of the assignes.
It's a better way of writing code.
We should always try to use Immutable way of programming as it's better way
It can be done through several ways. If we consider the example of obj then we have two methods
    1. using Object.assign method : It takes two inputs: one empty object, and second from which object we have to create new obj
    2. Spread operator
*/

const person1 = {
  name: "mayank",
  age: 23,
};

const person2 = Object.assign({}, person1);
//or
const person2 = { ...person1 };

person2.name = "simran";

console.log(person1);
console.log(person2);
