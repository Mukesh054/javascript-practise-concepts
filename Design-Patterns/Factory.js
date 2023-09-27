// factory pattern

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function Factory() {
  let data;
  this.create = (name, type) => {
    switch (type) {
      case 1:
        data = new Developer(name);
        break;

      default:
        data = new Tester(name);
        break;
    }
    return data;
  };
}

let res = [];

let factory = new Factory();
res.push(factory.create("Alien", 1));
res.push(factory.create("Sam", 2));

console.log(res);

///________________ 2nd way
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
