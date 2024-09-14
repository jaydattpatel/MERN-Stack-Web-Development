/*
 * Author : Jaydatt Patel
Built-in methods: Object.keys(obj), Object.values(obj), and Object.entries(obj).

- Object.keys(obj) : return an array list of properties
- Object.values(obj) :  returns an array list values. 
- Object.entries(obj) : returns an array listing both the keys and the values. 
- Object.assign(target, source1, source2, …, sourceN) : update or overwrite object Properties from other object 
- Object.create(obj) : to create new object by inheriting object prototyps
- Object.freeze(obj) : to create new object by static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype
- Object.getPrototypeOf(obj): to get the properties of object
- Object.setPrototypeOf(target, source) :  to set the properties of object
- Object.hasOwn(obj, property) : check property exist or not

*/


console.log("-----------------");
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
console.log(returnedTarget);
console.log(returnedTarget === target);
console.log(returnedTarget == target);

console.log("-----------------");
// copy object using  Object.assign() Method
var obj = { k :'world'}
var copy = Object.assign({}, obj)
console.log(obj);
console.log(copy === obj);
console.log(copy == obj);

console.log("-----------------");
// copy object using Spread Method 
var obj = { k :'hello'}
var copy = { ...obj }
console.log(obj);
console.log(copy === obj);
console.log(copy == obj);

console.log("-----------------");
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2));
console.log(Object.values(car2)); 
console.log(Object.entries(car2));

console.log("-----------------");
function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
    }
    else{
       dynamicKey = "color";
    }
    var drone = {
        speed: 15,
        color: "orange"
    }
  
    console.log("drone[dynamicKey] : ",drone[dynamicKey]);
}
testBracketsDynamicAccess();


//create new object from old object using prototype inheritance
console.log("---------------------------");
var o1 = {}
o1.obj1 = "Object-1";
console.log('o1.obj1 : ',o1.obj1);
console.log("Object.getPrototypeOf(o1) :",Object.getPrototypeOf(o1));

var o2 = Object.create(o1); //create new obj with prototypes of old objects
o2.obj2 = "Object-2";
console.log('o2.obj1 : ',o2.obj1);
console.log('o2.obj2 : ',o2.obj2);
console.log("Object.getPrototypeOf(o2) :",Object.getPrototypeOf(o2));

var o3 = Object.create(o2);
o3.obj3 = "Object-3";
console.log('o3.obj1 : ',o3.obj1);
console.log('o3.obj2 : ',o3.obj2);
console.log('o3.obj3 : ',o3.obj3);
console.log("Object.getPrototypeOf(o3) :",Object.getPrototypeOf(o3));
