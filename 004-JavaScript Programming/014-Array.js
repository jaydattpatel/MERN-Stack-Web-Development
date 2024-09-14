/*
 * Author : Jaydatt Patel
declare array and get array length by 
- array.length : to get length
- array.concat(array) : to concate array.
- array.push(obj) : to add at end and return new length of array
- array.pop() : to remove at end and return new length of array
- array.unshift(obj) : to add at start and return new length of array
- array.shift(obj) : to remove at start
- array.indexOf(obj): to get index number of object.
- array.includes(obj): to check object exist ot not.
- String.split(String seperator) : to get array from string  
- array.join(String) : to make string of array by inserting string after each elements.
- array.slice(length) : return array after remove elements by length from starting.
- array.splice(index,length, obj1[optional] , obj2[optional] ,.........) : to remove specific index and more by length and also used to add element optionally
-array.reserve() : to make reverse order of elements in existing array.
-array.toReserve() : to make reverse order of elements by returning new array.
-array.sort() : to sort elements in existing array.
-array.sort(fun(first,sec)) : to sort elements in existing array as per call back function.
-array.toSort() : to sort elements by returning new array.
-array.toSort(fun(first,sec)) : to sort elements as per call back function by returning new array.

*/

console.log("-----------1------------");
var arr = new Array(5,4,6,7,8); //defining array with new memory
arr[2] = 88; // modify perticular array element.
console.log(arr); 
console.log("length :", arr.length); 


console.log("-----------2------------");
var arr1 = [1,2,3]; 
var arr2 = ['a','b','c']; 
var arr = arr1.concat(arr2);
console.log("arr1.concat(arr2):", arr); 


console.log("-----------3------------");
var mix = [13,true,"monday"];
for(var i = 0; i < mix.length ;  i++ )
{
    console.log(i,':',mix[i]);
}


console.log("-----------4------------");
var tue = "tuesday";
var sun = "sunday";
var days = [sun,"monday",tue,"wednesday","thursday","friday","saturday"];
days.unshift("X-days"); // to add at start
days.shift(); // to remove at start
days.push("X-days"); //to add at end
days.pop(); // to remove at end
console.log(days);


console.log("-----------5------------");
var values = [11,12,13,14,15];
console.log(values);
console.log('values.indexOf(12) : ', values.indexOf(12)); //indexof() to find index num
console.log('values.includes(15) : ', values.includes(15)); //includes() to check object includes or not.

console.log("-----------6------------");
var values = [11,12,13,14,15];
var ind = values.indexOf(13);
if(ind >= 0)
    values.splice(ind,2) //remove 2 items from index ind
console.log("After splice :", values);

console.log("-----------7------------");
var values = [11,12,13,14,15];
console.log(values);
values = values.slice(2); // to remove 2 elements from start
console.log("After slice(2) :", values);



console.log("-----------8------------");
var values = [11,12,13,14,15];
console.log(values);
var str = values.join('@'); // join to make string of array with insert string. 
console.log("values.join('@') :", str);

console.log("-----------9------------");
//str.split(String seperator, limit) for convert string into array
var str =  "11-12-13-14-15";
console.log("String : ", str);
var values = str.split('-'); // convert string to array 
console.log("str.split('-') :", values);
var values = str.split('-',3); // convert string to array 
console.log("str.split('-',3) :", values);



//you will want to do the same thing to each item in an array, leaving you with an array containing the changed items. You can do this using map(). 
console.log("-----------10------------");
function double(item) 
    {
        return item * 2;
    }
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]

//you'll want to create a new array containing only the items in the original array that match some test. You can do that using filter().
console.log("-----------11------------");
function isLong(item) 
    {
        return item.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
