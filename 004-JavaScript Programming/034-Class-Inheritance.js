/*
 * Author : Jaydatt Patel

Inheritance :

- You can derive new class from base or super class using 'extends' keyword. 
- You can inhetits all Properties of super class but private properties can not be inherit. 
- You can access method or variable of super class in derived class using 'super' keyword. 
- You can also add prototype for class same as constructor function.

syntax: 
        class derived_class extends base_class{
            ....
        }

 */

class Person {

    #type = 'person';
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    
    show(){
        return(`${this.name}, ${this.age}, ${this.gender}`);
    }
}

class Student extends Person {
    
    constructor(roll,course,name,age,gender){
        super(name,age,gender); //calling base class constructor
        this.roll = roll;
        this.course = course;
        // this.#type = 'student'; // Error: Private variable of base class
    }

    show(){
        // calling base class method which is overridden
        return (super.show() +  
        `, ${this.roll}, ${this.course}`);
    }
}

console.log('-------------------------------');
var st1 = new Student(101,'Computer','Amit',22,'Male');
console.log(st1.show());
console.log(st1);