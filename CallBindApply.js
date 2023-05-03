var Patient = {
  firstName: "Happy",
  lastName: "Sharma",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

function getDetails(a, b) {
  return `${this.getFullName()}, ${a}, ${b} - loved dogs`;
}

// Bind usage
let obj = getDetails.bind(Patient, "Piku", "Ramu");
console.log(obj());


// Call usage
let obj = getDetails.call(Patient, "Piku", "Ramu");
console.log(obj);

// Apply usage
let obj = getDetails.apply(Patient, ["Piku", "Ramu"]);
console.log(obj);