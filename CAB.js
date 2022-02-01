/* 
    CALL, APPLY, BIND:
    * They are inbuilt functions that are used to access the functionality defined in one object with parameters provided by 
        another object.
    * They also help in setting the value for "this" keyword.
*/

/*
    CALL:
        * It's a default method attach with every function call.
        * Using call, we can provide "this" the context in which we want to use it.
        * We can also provide parameter to call.
        * Example:
*/

let obj1 = {
  firstName: "Mayank",
  lastName: "Yadav",
};

let getFullName = function (...args) {
  console.log(
    this.firstName + " " + this.lastName + " " + args[0] + " " + args[1]
  );
};

let obj2 = {
  firstName: "Ishita",
  lastName: "Dhaddha",
};

getFullName.call(obj2, "Profession:", "Doctor"); // Ishita Dhaddha Profession : Doctor

/* 
    APPLY:
        * Same functionality like 'call', can be implemented through apply.
        * The difference between 'call' and 'apply' is that in 'call' we provide the parameter in comma separated strings, where
            in case of 'apply' we supply the parameters are array.
        * Example: 
*/

let obj1 = {
  firstName: "Mayank",
  lastName: "Yadav",
};

let getFullName = function (...args) {
  console.log(
    this.firstName + " " + this.lastName + " " + args[0] + " " + args[1]
  );
};

let obj2 = {
  firstName: "Ishita",
  lastName: "Dhaddha",
};

getFullName.apply(obj1, ["Profession:", "Engineer"]); // Mayank Yadav Profession : Engineer

/* 
    BIND:
        * Bind also provide us with the ability to define the context of "this", but it's quite different then call and apply.
        * In bind when we call a method with an obj, it returns a function unlike call and apply which are executed immediately.
        * In bind we get function as return, which can be used at later stage by us to get the value as output.
        * Example:
*/

let obj1 = {
  firstName: "Mayank",
  lastName: "Yadav",
};

let getFullName = function (...args) {
  console.log(
    this.firstName + " " + this.lastName + " " + args[0] + " " + args[1]
  );
};

let obj2 = {
  firstName: "Ishita",
  lastName: "Dhaddha",
};

let infoUser = getFullName.bind(obj2); // returns the function bound to it, i.e. getFullName

infoUser("Profession :", "Doctor"); // Ishita Dhaddha Profession : Doctor
