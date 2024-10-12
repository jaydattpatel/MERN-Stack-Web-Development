/*
 * Author : Jaydatt Patel
Three specific methods that exist on arrays:
1) array.forEach(function(currentElement , indexNum[optional], array[optional]){})
2) array.filter(function(currentElement , indexNum[optional], array[optional]){})
3) array.map(function(currentElement , indexNum[optional], array[optional]){})
4) array.reduce(
    function( Accumulator, currentElement , indexNum[optional], array[optional] ){}, accu_initial_val[optional])
5) array.find(function(currentElement , indexNum[optional], array[optional]){})
6) array.findIndex(function(currentElement , indexNum[optional], array[optional]){})
7) array.findLast(function(currentElement , indexNum[optional], array[optional]){})
8) array.findLastIndex(function(currentElement , indexNum[optional], array[optional]){})
9) array.some(function(currentElement , indexNum[optional], array[optional]){})

- element:  The current element being processed in the array.
- index : The index of the current element being processed in the array.
- array : The array map() was called upon.

1. forEach(function) : This method accepts a function that will work on each array item. This method do not return object and not make changes in array.

2. filter(function) : It is use to get new array by filtering elements from arrays based on a specific function. Those array items are pass to function and function return true or false boolean to filter elements.

3. map(function) : This method is used to get new array by changing each array item over to another array's item, based on the function that is passed-in to the map as a parameter. 
 
4. reduce(function, accu_val[optional]) : This method accept callback function with accumulator variable and optional initial value for accumulator. It is use to accumulate elements in single variable as per defined function.

5. array.find(function) :This method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

6. array.findIndex(function): method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

7. array.findLast(function): method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

8. array.findLastIndex(function): method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

9 array.some(function): method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
*/

//array.forEach(function)
console.log("-------array.forEach(function)---1------");
const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

console.log("-------array.forEach(function)---2------");
const veggies = ["onion", "garlic", "potato"];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${veggie}`);
});

console.log("-------array.forEach(function)---3------");
const result = [];
const drone = {
  speed: 100,
  color: "yellow",
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});
console.log(result);

//array.filter(function)
console.log("----------array.filter(function)---1---");
var num1 = [0, 10, 20, 30, 40, 50];
var num_filt = num1.filter(function (num) {
  return num > 20;
});
console.log(num_filt);

console.log("----------array.filter(function)---2---");
var num2 = [0, 10, -20, 30, -40, -50];
var num_filt = num2.filter((num) => {
  return num > 0;
});
console.log(num_filt);

console.log("----------array.filter(function)---3---");
var num3 = [0, 10, "hello", true, false, undefined, "", null];
var num_filt = num3.filter(Boolean); // to filer all values except falsy (0,false,null,undefined)
console.log(num_filt);

console.log("----------array.filter(function)---4---");
var numbers = [1, 2, 3, 4, 5, 2, 4, 2];
var filteredNumbers = numbers.filter((element, index, array) => {
  return array.indexOf(element) === index;
});
console.log(filteredNumbers);

//array.map(function)
console.log("----------array.map(function)---1--");
var num3 = [0, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10;
});
console.log(num3);

console.log("----------array.map(function)---2---");
const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];
function createUser(ids, names, images) {
  const users = ids.map((id, index) => {
    return {
      id: id,
      name: names[index],
      image: images[index],
    };
  });

  return users;
}

console.log(createUser(ids, names, images));

console.log("----------array.map(function)---3---");
const employees = [
  { id: 1, name: "Alice", department: "sales", salary: 40000 },
  { id: 2, name: "Bob", department: "engineering", salary: 50000 },
  { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
  { id: 4, name: "David", department: "sales", salary: 35000 },
  { id: 5, name: "Emily", department: "engineering", salary: 55000 },
];
function increaseSalaries(employees) {
  //Implement your function here to modify the salaray.
  let emp = employees.map((employee) => {
    let newEmp = {
      id: employee["id"],
      name: employee["name"],
      department: employee["department"],
      salary: employee["salary"],
    };
    if (newEmp["department"] === "sales") {
      newEmp["salary"] += newEmp["salary"] * 0.1;
    } else if (newEmp["department"] === "engineering") {
      newEmp["salary"] += newEmp["salary"] * 0.15;
    } else {
      newEmp["salary"] += newEmp["salary"] * 0.05;
    }
    return newEmp;
  });
  return emp;
}
console.log("New :\n", increaseSalaries(employees));
console.log("Old :\n", employees);

console.log("-------array.reduce(function, acc_initial_val)---1---");
const arr_num = [1, 2, 3, 4, 5];
var add = (accu, currentElement, index) => {
  console.log(
    "index : ",
    index,
    ", accu :",
    accu,
    ", currentElement : ",
    currentElement
  );
  return accu + currentElement;
};
var sum = arr_num.reduce(add, 0); // here 0 is initial value for accumulater.
console.log("sum:", sum);

console.log("-------array.reduce(function, acc_initial_val)---2---");
const contacts = [
  { name: "Alice", company: "ABC Inc." },
  { name: "Bob", company: "XYZ Corp." },
  { name: "Charlie", company: "ABC Inc." },
];

function mapContactsToCompanies(contacts) {
  return contacts.reduce(function (accu, cont) {
    if (accu[cont.company] == undefined) accu[cont.company] = [];
    accu[cont.company].push(cont.name);
    return accu;
  }, {}); //here '{}' is initial value of accumulator
}
console.log(mapContactsToCompanies(contacts));

console.log("-------array.reduce(function, acc_initial_val)---3---");
// If we apply the reduce to an empty array, it will print the initial value that is passed although if the no initial value is passed with an empty array, it will throw an error.
const arr = [];
var val = arr.reduce((accu, curr_ele) => {
  accu + curr_ele;
}, 5);
// var val = arr.reduce((accu,curr_ele) =>{accu+curr_ele;}); Error: if initial value and return value not given then it will give error.
console.log("val : ", val);

console.log("-------array.find(function) --------");
var array1 = [5, 12, 8, 130, 44];
var found = array1.find((element) => element > 10);
console.log(found);

console.log("-------array.findIndex(function)--------");
var array1 = [5, 12, 8, 130, 44];
var isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));

console.log("-------array.findLast(function)--------");
var array1 = [5, 12, 50, 130, 44];
var found = array1.findLast((element) => element > 45);
console.log(found);

console.log("-------array.findLastIndex(function)--------");
var array1 = [5, 12, 50, 130, 44];
var isLargeNumber = (element) => element > 45;
console.log(array1.findLastIndex(isLargeNumber));

console.log("-------array.some(function)--------");
var array = [1, 2, 3, 4, 5];
// Checks whether an element is even
var even = (element) => element % 2 === 0;
console.log(array.some(even));
