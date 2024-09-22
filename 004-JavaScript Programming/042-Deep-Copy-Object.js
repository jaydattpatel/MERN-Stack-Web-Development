/* 
author : Jaydatt Patel

Deep copy : In Deep copy, It will copy  all key and values from object also array, number,string, object. But not functio.

Note : You can not copy function in Shallow or Deep Copy. Its Possible Library function. 

*/
var user1 = {
  name: "Amit",
  marks: {
    maths: 20,
  },
};

console.log("----Deep Copy using JSON----");
// conver object to JSON string and then JSON String To Object
var user2 = JSON.parse(JSON.stringify(user1));
console.log("\nuser2 :", user2);
console.log("\nuser1 :", user1);

user2.name = "Harry";
user2.marks.maths = 10;
console.log("\nuser2 :", user2);
console.log("\nuser1 :", user1);
