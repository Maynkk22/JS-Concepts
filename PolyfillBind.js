/* POLYFILL FOR BIND */

/*
    * Polyfill means that when we are using an inbuilt functionality, like bind or call sometimes the browser don't understand them
        or not have these methods as inbuilt. So then our code or functionality for these browsers will fail. 
    * So in order to provide a fallback or inclusive functionality we use polyfills for the function.
    * Here we are building the polyfill for "bind" method.  
*/

// Using inbuilt bind method

let obj = {
  city: "Agra",
  state: "UP",
};

function info(name, profession) {
  console.log(
    name +
      " is an " +
      profession +
      " .He belongs to " +
      this.city +
      " , " +
      this.state
  );
}

let getInfo = info.bind(obj);
getInfo("Ishita", "Doctor");

Function.prototype.mybind = function (...args) {
  // Function.prototype is used to make mybind a prototypal method like bind and call
  let ref = this; // refers to the info function as on info function we are applying mybind method.
  params = args.slice(1); // separate out the arguments so that if multiple arguments are provided they can be used.
  return function (...args2) {
    ref.apply(args[0], [...params, ...args2]); // used apply instead of call because the arguments are in array form.
  };
};

let getInfo2 = info.mybind(obj, "Mayank");
getInfo2("Engineer");
