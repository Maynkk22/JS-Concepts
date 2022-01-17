function duplicateChar(str) {
  let string = str.toLowerCase();
  console.log(str);
  console.log(string);
  for (let i = 0; i < string.length; i++) {
    let count = 0;
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        count++;
      }
    }
    if (count > 1) {
      console.log(string[i], count);
    }
  }
}

duplicateChar("Hello World! How are you?");
