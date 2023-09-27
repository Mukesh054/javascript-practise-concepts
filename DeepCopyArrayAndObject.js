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

/////________________ 2nd Solution
function cloneDeep(data, map = new Map()) {
  if (data === null) return data;
  if (data instanceof RegExp) return new RegExp(data);
  if (data instanceof Date) return new Date(data);
  if (typeof data !== "object") return data;
  if (map.has(data)) return map.get(data);
  const clone = data.constructor();
  map.set(data, clone);
  const keys = [...Object.keys(data), ...Object.getOwnPropertySymbols(data)];
  for (let key of keys) {
    clone[key] = cloneDeep(data[key], map);
  }
  return clone;
}
