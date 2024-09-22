/*
 * Author : Jaydatt Patel
Object literals and the dot notation
One of the most common ways of building an object in JavaScript is using the object literal syntax: {}.

*/

console.log("--------Method-1---------");
var student = {}; //create an object
student.id = 123;
student.name = "Rahul";
student.degree = "BCA";
student.subjects = ["C", "C++", "JAVA", "Python"];
student.printdata = function () //add function in objects
{
  console.log(this);
};
student.getdata = function () //add function in objects
{
  console.log(this.id, this.name, this.degree, this.subjects);
};

student.printdata();
student.getdata();

console.log("--------Method-2---------");
var address = {
  city: "Jaipur",
  pincode: 123456,
  state: "Rajasthan",
  contry: "India",
  show: function () {
    console.log(this.city, this.pincode, this.state, this.contry);
  },
};
address.show();
console.log(address.city);
address.city = "Ajmer";
console.log(address);

/*
Object literals and the brackets notation. There is an alternative syntax to the dot notation I used up until this point. This alternative syntax is known as the brackets notation.
*/
console.log("--------Method-3---------");
var house = {};
house["rooms"] = 4;
house["color"] = "pink";
house["price"] = 12345;
console.log(house);

console.log("--------Method-4---------");
var Keys = ["speed", "altitude", "color"];
var drone = {
  speed: 100,
  altitude: 200,
  color: "red",
};
for (const k of Keys) {
  console.log(k, "-", drone[k]);
}

console.log("--------constructor-Method-5---------");
//constructor functions for the built-in objects, I can also define custom constructor functions.  (looks like class) same as above. No return type is required and it is optional..
function Icecream(product) {
  this.flavor = product;
  this.melt = function () {
    console.log(`The ${this.flavor} icecream has melted`);
  };
}
let kiwi_Icecream = new Icecream("kiwi");
let apple_Icecream = new Icecream("apple");
kiwi_Icecream.melt();
apple_Icecream.melt();

console.log("-------constructor-Method-6---------");
//constructor functions for the built-in objects, I can also define custom constructor functions. (looks like class) same as above. No return type is required and it is optional..
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

const person = createPerson("Alex");
person.name;
person.introduceSelf();

console.log("--------Method-7---------");
// access target value by nesting keys of passed array of keys.
const userProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  address: {
    city: "New York",
    street: "123 Main St",
    zipCode: "10001",
  },
};

// access target value by nesting keys of passed array of keys.
function getUserDetail(profile, keys) {
  let obj = profile;
  for (let key of keys) {
    obj = obj[key];
  }
  return obj != undefined ? obj : "Not available";
}

console.log(getUserDetail(userProfile, ["address", "city"]));
console.log(getUserDetail(userProfile, ["address", "block"]));

//create new object from old object using prototype inheritance
console.log("--------Method-8---------");
var o1 = {};
o1.obj1 = "Object-1";
console.log("Object.getPrototypeOf(o1) :", Object.getPrototypeOf(o1));

var o2 = Object.create(o1); //create new obj with prototypes of old objects
o2.obj2 = "Object-2";
console.log("Object.getPrototypeOf(o2) :", Object.getPrototypeOf(o2));

var o3 = Object.create(o2);
o3.obj3 = "Object-3";
console.log("Object.getPrototypeOf(o3) :", Object.getPrototypeOf(o3));

console.log("o3.obj1 :", o3.obj1);
console.log("o3.obj2 :", o3.obj2);
console.log("o3.obj3 :", o3.obj3);
