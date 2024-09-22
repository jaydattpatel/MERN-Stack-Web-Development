/*
 * Author : Jaydatt Patel
Create Private variable or method using '#'.  Private variables or methods can not be access out side class. 

Note : '#id' and 'id' variable are different variable and you must use '#' where you use private variables or methods.
*/

class Student {
  // variable declaration
  #id; // # for private variable
  name;

  //constructor
  constructor(id, name, age) {
    this.#setId(id);
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`id: ${this.#id}, name: ${this.name}, age: ${this.age}`);
  }

  // private function using '#'
  #setId(id) {
    this.#id = id;
  }

  getId() {
    return this.#id;
  }
}

const s1 = new Student(123, "Amit", 22);
s1.show();
console.log("s1.getId() :", s1.getId());

// s1.#id = 321;    //Error: Property '#id' is not accessible outside class 'Student' because it has a private identifier.

// s1.#setId(321);  //Property '#setId' is not accessible outside class 'Student' because it has a private identifier.
