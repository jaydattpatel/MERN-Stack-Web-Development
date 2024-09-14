/*

author : Jaydatt Patel;

The static keyword defines a static method or field for a class, or a static initialization block. 

Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

If class has normal variable 'count' and variable 'static count'  both are different variable. Normal variable count is local instance variable and it can be access using this.count in class and obj.count for instance of object. But Static count variable is common and only can be access by class name like ClassName.Count which is common for all instance.

Static Methods can only use static properties and methods. You can access static variable or method using 'this' keyword only in Static Methods.

Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

*/


class Person{
    static count;
    // initialization of static
    
    static{
        Person.count = 0;
    }
    constructor(name,age){
        this.name = name;
        this.age = age;
        Person.count++;
    }
    get(){
        return `${this.name},${this.age},${Person.count}`;
    }


// creating static method. Static Methods can only use static properties and methods.
    static show(){
        return this.count;  //using static variable in static method.
        // this.get(); //you can not use non static variable or methods in static method.
    }
}

class Student extends Person{
    static count;
    // initialization of static
    
    static{
        Student.count = 0;
    }
    constructor(name,age,roll){
        super(name,age);
        this.roll = roll;
        Student.count++;
    }
    info(){
        return `${this.name},${this.age},${this.roll}`;
    }

}

console.log(Person.show());

let p1 = new Person('Amit',22);
console.log(p1.get());
// console.log(p1.show()); //error: It is not function


let s1 = new Student('Darshil', 19,123);
console.log(s1.info());
console.log(Student.show());

let s2 = new Student('Rahul', 12 ,333);

console.log('Person.count : ',Person.count);
console.log('Student.count : ',Student.count);





