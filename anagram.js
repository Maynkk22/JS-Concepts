function checkStrings(a, b) {
  let len1 = a.length;
  let len2 = b.length;
  if (len1 !== len2) {
    console.log(false);
    return;
  }
  let str1 = a.split("").sort().join("");
  let str2 = a.split("").sort().join("");
  if (str1 === str2) {
    console.log(true);
    return;
  } else {
    conole.log(false);
    return;
  }
}

checkStrings("eleven plus two", "twelve plus one");
