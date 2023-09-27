function Fedex() {
  this.calculate = (package) => {
    return 2; // do whatever logic
  };
}

function UPS() {
  this.calculate = (package) => {
    return 3; // do whatever logic
  };
}

function Shipping() {
  this.company = "";

  this.setStragey = (company) => {
    this.company = company;
  };

  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

const package = { to: "Assam", from: "America", weight: 20 };

const fedex = new Fedex();
const ups = new UPS();

const shipping = new Shipping();
shipping.setStragey(fedex);
console.log(shipping.calculate());
