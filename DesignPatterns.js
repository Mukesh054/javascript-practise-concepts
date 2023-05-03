//URL: https://www.dofactory.com/javascript/design-patterns/observer


// Factory Patterns Example
class Car {
  constructor(options) {
    this.wheels = options.wheels || 4;
    this.color = options.color || "silver";
  }
}

class Truck {
  constructor(options) {
    this.wheels = options.wheels || 6;
    this.color = options.color || "red";
  }
}

class Factory {
  create = (options, vehicleType) => {
    if (!vehicleType) {
      return "unable to make vehicle. Please specify a vehicle type and tryagain!";
    }

    let vehicle;

    if (vehicleType === "car") {
      vehicle = new Car(options);
    } else if (vehicleType === "truck") {
      vehicle = new Truck(options);
    }

    vehicle.vehicleType = vehicleType;

    vehicle.startEngine = () => console.log(`Reving ${vehicleType} engine`);

    return vehicle;
  };
}

const vehicleFactory = new Factory();
const car = vehicleFactory.create(
  {
    wheels: 4,
    doors: 2,
    color: "black",
  },
  "car"
);

console.log(car);
console.log(car.startEngine());

// Factory Patterns Example ends here++++++++++++++++++++++

// Builder Pattern starts here
function Shop() {
  this.construct = function (builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  };
}

function CarBuilder() {
  this.car = null;

  this.step1 = function () {
    this.car = new Car();
  };

  this.step2 = function () {
    this.car.addParts();
  };

  this.get = function () {
    return this.car;
  };
}

function Car() {
  this.doors = 0;

  this.addParts = function () {
    this.doors = 4;
  };

  this.say = function () {
    console.log("I am a " + this.doors + "-door car");
  };
}

function run() {
  var shop = new Shop();
  var carBuilder = new CarBuilder();
  var car = shop.construct(carBuilder);

  car.say();
}

run();
// Builder Pattern ends here +++++++++++++++

// Singleton Pattern starts here +++++++++++++++
var Singleton = (function () {
  var instance;

  function createInstance() {
    var object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
// Singleton Pattern ends here +++++++++++++++
