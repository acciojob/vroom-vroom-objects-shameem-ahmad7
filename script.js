// Car constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding getMakeModel method to Car's prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor with the current context (this)
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inheriting Car prototype in SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Setting the constructor back to SportsCar (after prototype inheritance)
SportsCar.prototype.constructor = SportsCar;

// Adding getTopSpeed method to SportsCar's prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Example usage
const car = new SportsCar("Ferrari", "Testarossa", 200);

console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed());  // Output: 200


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
