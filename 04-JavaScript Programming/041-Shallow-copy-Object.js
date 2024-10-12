/* 
author : Jaydatt Patel

Shallow copy : In Shallow copy, It copy just first level of key and value. If value is any object or array then it will just copy the address of that value.

Note : You can not copy function in Shallow or Deep Copy. Its Possible Library function. 

*/

var user1 = {
  name: "Amit",
  marks: {
    maths: 20,
  },
};

console.log("----Shallow Copy using spread----");
var user2 = { ...user1 };
console.log("\nuser2 :", user2);
console.log("\nuser1 :", user1);

user2.name = "Harry"; //this will apply only to user2
user2.marks.maths = 10; // this will apply to user1 and user2
console.log("\nuser2 :", user2);
console.log("\nuser1 :", user1);

console.log("\n----Shallow Copy using Object.assign----");
var user2 = Object.assign({}, user1);
console.log("\nuser2 :", user2);
console.log("\nuser1 :", user1);

user2.name = "Harry"; //this will apply only to user2
user2.marks.maths = 10; // this will apply to user1 and user2
console.log("\nuser2 :", user2);
console.log("\nuser1 :", user1);
