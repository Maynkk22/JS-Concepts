let list = ["a", "b", "c", "d"];
let spliced = list.splice(0, list.length);
console.log(list);

//or

let list = ["a", "b", "c", "d"];
list.length = 0;
console.log(list);
