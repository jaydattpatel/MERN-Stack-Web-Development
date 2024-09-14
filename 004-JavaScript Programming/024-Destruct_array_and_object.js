/* 
 * Author : Jaydatt Patel
Destructur the array or object property and copy them in other variable or object without affecting original data.
*/
console.log("--------------Destructure Array-------");

console.log("-----------1-----------");
const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

console.log("-----------2-----------");
const fruits = ['Apple','Mango','Kiwi','Berry','banana','lichi'];
// skip elements by adding comma
var [a, , , k] = fruits;
console.log('[a, , , k]');
console.log('a :', a,', k :',k);
  
var [a, m, ...arr] = fruits;
console.log('\n[a, m, ...arr]');
console.log('a :',a,', m: ', m,', arr :',arr);

var [a, m, ...[, be, ba]] = fruits;
console.log('\n[a, m, [ , be, ba]]');
console.log('a :',a,', m: ', m,', be :',be,', ba : ', ba);

console.log("-----------3-----------");

let nestedArray = ["orange", ["apple", "banana", ["grape", "mango"]], "peach"]; let [first, [ , ,[third]]] = nestedArray;
console.log('\n[first, [ , ,[third]]]');
console.log('first :',first,', third: ', third);

console.log("--------------Destructure Object-------");

var student = {}; //create an object
student.id  = 123;
student.name  = "Rahul";
student.degree  = "BCA";
student.subjects =  ["C","C++","JAVA","Python"];
student.printdata = function() //add function in objects
    {
        console.log(student);
    };
student.getdata = function() //add function in objects
    {     
        console.log(this.id,this.name,this.degree,this.subjects );
    };

//get copy value of id property of student
console.log("-----------1-----------");
console.log((id === student.id)); // check the same property 
var {id} = student; //copy value of id from student obj if not found then undefined 
console.log(id);
console.log((id === student.id));

//get values of multiple properties of object in local variable 
console.log("-----------2-----------");

var {id,name,subjects,xyz} = student; //copy from student obj if not found then undefined 
console.log('id :', id);
console.log('name :', name);
console.log('subjects :', subjects);
console.log('xyz :', xyz);

//get values of multiple properties of object in local variable 
console.log("-----------3-----------");
var {id : roll, name : nm , subjects : sub} = student; //copy from student obj if not found then undefined 
console.log('roll :', roll);
console.log('nm :', nm);
console.log('sub :', sub);
console.log((roll === student.id)); // check the same property 

//get copy of multiple property of object in new variable name
console.log("-----------4-----------");
var num, fullname, dg;
({id : num, name : fullname , degree : dg} = student); //copy from student obj if not found then undefined 
console.log('num :', num);
console.log('fullname :', fullname);
console.log('dg :', dg);

//try to copy unkonwn property 
console.log("-----------5-----------");
console.log((pop === student.id)); // check the same property 
var {pop} = student; //copy pop from student obj if not found then undefined 
console.log(pop);
console.log((pop === student.id));