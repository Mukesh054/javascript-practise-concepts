function deepCopy(inputObj) {
  var newObj = inputObj;
  if (inputObj && typeof inputObj === "object") {
    newObj =
      Object.prototype.toString.call(inputObj) === "[object Array]" ? [] : {};
    for (var i in inputObj) {
      newObj[i] = deepCopy(inputObj[i]);
    }
  }
  return newObj;
}

// For Object usage
const obj = {
  name: "Happy",
  address: {
    city: "Karnal",
    post: {
      a: 1,
      b: 2,
    },
  },
};

let bb = deepCopy(obj);
bb.address.post.a = 8;
console.log(bb);
console.log(obj);

// For array usage
const obj = [1, 2, [3, 4, [5, 6]]];

let bb = deepCopy(obj);
bb[2][2][0] = 10;
console.log(bb);
console.log(obj);
