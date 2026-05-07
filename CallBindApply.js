var Patient = {
  firstName: "Happy",
  lastName: "Sharma",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

function getDetails(a, b) {
  return `${this.getFullName()}, ${a}, ${b} - loved dogs`; // Happy Sharma, Piku, Ramu - loved dogs
}


let obj = getDetails();
console.log(obj);

let obj = getDetails.bind(Patient, "Piku", "Ramu");



let obj = getDetails.call(Patient, "Piku", "Ramu");
console.log(obj);


let obj = getDetails.apply(Patient, ["Piku", "Ramu"]);
console.log(obj);