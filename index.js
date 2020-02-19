/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.stomach = [];
  this.name = name;
  this.age = age;
  
}// Initial person object including stomach array to be used lower.
Person.prototype.eat = function(someFood) {
  if (this.stomach.length < 10) {
    this.stomach.push(someFood);
  }
}; // eating someFood adds to the stomach array up to 10 items, and then dissallow continued use.

Person.prototype.poop = function() {
  this.stomach.length = 0;
}; //Reduce Array to 0 upon poop.
Person.prototype.toString = function personToString() {
  return `${this.name} ", "${this.age}`;
}; //return the name and age of Person upon using .poop

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.tank = 0; //Tank
  this.odometer = 0; //Base Odometer/distance, reset to 0
  this.model = model; //Type of vehicle 
  this.milesPerGallon = milesPerGallon; // simplifying miles per gallon
}

Car.prototype.fill = function(gallons) {
  this.tank += gallons;
}; //Classify how much on fillup per Gallons per Vehicle model.

Car.prototype.drive = function(distance) {
  let empty = this.tank * this.milesPerGallon; //from empty, the ammount of gallons vs miles per use
  if (distance < empty) {
    this.odometer += distance; //How far the vehicle travelled.
    this.tank -= distance / this.milesPerGallon; // Reduce the distance by how many gallons used
  } else {
    this.odometer += empty; //if the car runs out of fuel, add distance based on distance.
    this.tank -= empty / this.milesPerGallon; // Empty the tank from prior value.
    return `I ran out of fuel at ${this.odometer} miles!`; //String of when Tank = 0
  };
}





/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age, favoriteToy);
  this.favoriteToy = favoriteToy;
} //create the instance.
Baby.prototype = Object.create(Person.prototype); //Make Baby a child of Person

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`; // String of Added favorite Toy.
};



/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Window/Global Binding involves the entirity of the page, or the console/window Object.
  2. Implicit Binding: Refers to involvement directly to an object.
  3. New Binding: Used predominantly with Constructor functions, it refers to the specific instance of the object (created) to be refered to and returned.
  4. Explicit binding: Explicit, exact, this is this and only this.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}


//Reference points: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math