/*
 * Author : Jaydatt Patel
class syntax:
1)  class class_name{
            variable declaration...;
            constructor(){.........}
            methods(){........}
        }

2)  const class_name = class {
            variable declaration...;
            constructor(){.........}
            methods(){........}
        }

You can also add prototype for class same as constructor function.

*/
class Vehicle {
  // variable declaration
  name;
  //constructor
  constructor(name = "Global", col = "white", spd = 200) {
    this.name = name;
    this.color = col; //color var automatically create using constructor
    this.speed = spd; //speed var automatically create using constructor
  }

  //method-1
  show() {
    console.log(
      `name: ${this.name}, color: ${this.color}, speed: ${this.speed}`
    );
  }
  //method-2
  turbo() {
    console.log("Turbo On");
  }

  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}
console.log("Type :", Vehicle);

var car1 = new Vehicle();
car1.show();
car1.turbo();

var car2 = new Vehicle("Car", "Red", 150);
car2.show();

console.log("car2.getSelf() : ");
car2.getSelf();

console.log("car2.getPrototype() : ");
car2.getPrototype();
