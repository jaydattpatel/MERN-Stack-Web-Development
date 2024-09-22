/*
 * Author : Jaydatt Patel
error handle Sample program
*/

console.log("-----------Program-1-------------");
function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("the first argument is not a number");
    } else if (typeof b != "number") {
      throw new ReferenceError("the second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error!", err);
  }
}
addTwoNums(5, "5");
console.log("It still works");

console.log("-----------Program-2-------------");
function letterFinder(word, match) {
  if (
    typeof word == "string" &&
    word.length >= 2 &&
    typeof match == "string" &&
    match.length == 1
  ) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) console.log("Found the", match, "at", i);
      else console.log("---No match found at", i);
    }
  } else {
    console.log("Please pass correct arguments to the function.");
  }
}

letterFinder(5, 2);
letterFinder("cat", "c");
