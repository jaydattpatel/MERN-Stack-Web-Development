/*
 Author : Jaydatt Patel

 Inherit constructor function.

 We can also use constructor function to create new derived constructor function same as base super class and sub or derived class. 
*/
  
console.log('---------------------1-----------------------');

function Vehicle(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
    this.showV = function(){
        console.log(this);
    }
};
Vehicle.prototype.getVeh = function () {
    console.log(`Name: ${this.name}, Color: ${this.color}, Wheels: ${this.wheels}`);
};

console.log(Object.create(Vehicle));
  
function Car(color, brand, seats) {
  Vehicle.call(this, 'car', color , 4);
  this.brand = brand;
  this.seats = seats;
};

// copy all prototype which are inherited in base function
Object.setPrototypeOf(Car.prototype, Vehicle.prototype); 
// Car.prototype = Vehicle.prototype; 
// or  Car.prototype = Object.create(Vehicle.prototype);

//add seperate prototype
Car.prototype.getDetails = function () {
    console.log(`The ${this.color} ${this.name} is of ${this.brand} company. It has seating for ${this.seats} people`);
};

const car1 = new Car('Black', 'Audi', 5);
console.log('car1 : ', car1);
console.log('car1.__proto__ :', car1.__proto__);
car1.getDetails(); // calling inherited method of derived function.
car1.getVeh(); // calling inherited method of base function


console.log('---------------------2-----------------------');
 
function Book(name,pages,price){
    this.name = name;
    this.pages = pages;
    this.price = price;
    this.bookInfo = function(){
        console.log(`name: ${this.name}, pages: ${this.pages}, price: ${this.price}`);
    }
}

function Author(name,pages,price,authorName){
    Book.call(this, name,pages,price); // calling function call
    this.authorName = authorName;
    this.authorInfo = function(){
        console.log(`authorName: ${this.authorName}`);
    }
}

function Motivation_Books(name,pages,price,authorName,details){
    Book.call(this, name,pages,price); // calling function call
    Author.call(this, name,pages,price,authorName); // calling function call
    this.details = details;
    this.getInfo = function(){
        console.log(this);
    }
}

let book1 = new Motivation_Books('XYZ', 200, '1500 INR', 'Mr.Author', 'New Book For Moto');
book1.getInfo();
book1.bookInfo();
book1.authorInfo();
