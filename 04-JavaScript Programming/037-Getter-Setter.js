/*
author : Jaydatt Patel;

Getter: The get syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.

Note: You can not pass parameters in get method.
syntax: 
            get Method_name(){

            }

Setter: The set syntax binds an object property to a function to be called when there is an attempt to set that property. It can also be used in classes.

Note: You can pass only one parameters in get method.
syntax:
            set Method_name(obj){
                
            }

*/

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(newDiameter) {
    this.radius = newDiameter;
  }
}

const circle = new Circle(4);
console.log("circle.radius : ", circle.radius);
console.log("circle.diameter : ", circle.diameter);

circle.diameter = 20;
console.log("circle.radius : ", circle.radius);
console.log("circle.diameter : ", circle.diameter);
