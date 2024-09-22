/* 
 * Author : Jaydatt Patel

used to set a default parameter inside a function definition, which goes hand in hand with the defensive coding approach, while requiring almost no effort to implement.

*/
console.log("--------1-------");
function result(number = 10, Sem = "Graduated") {
  console.log("Result:", number * number, Sem);
}

result(); // take default parameters
result(20);
result(30, "Sem-3");

console.log("--------2-------");
class Student {
  constructor(num1 = 999, name = "Anonymous:", bool1 = true) {
    this.num1 = num1;
    this.name = name;
    this.bool1 = bool1;
  }
  show() {
    if (this.bool1) {
      console.log(this.name, this.num1);
      return;
    }
    return "The value of bool1 is incorrect";
  }
}
var s1 = new Student();
s1.show();
var s2 = new Student(101, "Rahul");
s2.show();
var s3 = new Student(102);
s3.show();
