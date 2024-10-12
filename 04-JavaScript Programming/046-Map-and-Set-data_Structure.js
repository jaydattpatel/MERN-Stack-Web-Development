/*
 * Author : Jaydatt Patel
Objects : var = { Prop : val,...}

Map : var = new Map() 
Data can be stored with realting hash value using map. Hash value can not be same.

Set : var = new Set(array)
Other : Queues, Linked lists (singly-linked and doubly-linked), Trees, Graphs
*/

console.log("-----------Map");
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
bestBoxers.set(1, "xyz");

console.log(bestBoxers);

console.log("bestBoxers.get(1) : ", bestBoxers.get(1));

//  In set there are no duplicate values.
//  Elements of Set can not be accessed by index.
console.log("-----------Set-1");
const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

console.log("-----------Set-2");
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(1);
set.delete(4);
console.log(set);
console.log("set.size:", set.size);

console.log("-----------Set-3");
var s1 = new Set([1, 2, 3, 4]);
console.log("typeof(s1): ", typeof s1);
console.log("s1: ", s1);

console.log("-----------Set-4");
arr1 = [1, 2, 4, 5, 7];
arr2 = [3, 4, 6, 7, 9, 0];
function mergeArray(arr1, arr2) {
  //Implemet your function here
  let arr = [...new Set([...arr1, ...arr2])];
  return arr;
}
console.log(mergeArray(arr1, arr2));
