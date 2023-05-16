// Reverse an array in JS
var arr = [1, 2, 3];
function reverseMe(aa) {
  const newArr = [];
  for (let i = aa.length; i > 0; i--) {
    newArr.push(i);
  }

  return newArr;
}
console.log(reverseMe(arr));

// Flat an array without function
var arr = [1, 2, 3, 1, [4, 5, [8, 9, [12, [23]]]]];
let newArr = [];
function flatMe(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArr = flatMe(array[i]);
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
console.log(flatMe(arr));

// Print it as [yppaH, maR]
const aa = ["Ram", "Happy"];
console.log(Array.of(aa.toString().split("").reverse().join("")));

// Factorial of a number
function fact(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
console.log(fact(5));

// Count number of duplicates entries in an array
const counts = {};
const sampleArray = ["a", "a", "b", "c", "a"];
sampleArray.forEach(function (x) {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);

// Flat a nested object
const flatten = (ob) => {
  let result = {};
  for (const i in ob) {
    if (typeof ob[i] === "object" && !Array.isArray(ob[i])) {
      const temp = flatten(ob[i]);
      for (const j in temp) {
        result[j] = temp[j];
      }
    } else {
      result[i] = ob[i];
    }
  }
  return result;
};

const obj = {
  name: "Ram",
  address: {
    zip: "123",
    street: {
      area: "2/3",
    },
  },
};
console.log(flatten(obj));

// Flat a object with nested path using dot(.) operator
function flattenObjectWithRelativePath(obj, prefix = "") {
  let output = {};

  for (const key in obj) {
    const val = obj[key];

    const newKey = prefix === "" ? key : prefix + "." + key;

    if (val !== null && typeof val === "object") {
      let recursiveOutput = solution(val, newKey);
      output = { ...output, ...recursiveOutput };
    } else {
      output[newKey] = val;
    }
  }

  return output;
}
console.log(solution(obj));

// Find second largest number from an array
function findSecondLargestElem(arr) {
  let first = -1,
    second = -1;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    }
  }
  console.log(second);
}
let arr = [12, 35, 1, 10, 34, 1];
findSecondLargestElem(arr);

// Fibronic Series
let n1 = 0,
  n2 = 1,
  nextTerm;

for (let i = 1; i <= 6; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

// Count sum of a number in an array
function countSum(arr, num) {
  let map = {};

  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      stack.push([map[arr[i]], arr[i]]);
    } else {
      map[num - arr[i]] = arr[i];
    }
  }
  return stack;
}

const aa = [2, 4, 5, 5, 12, 7, 13, 45];
console.log(countSum(aa, 9));

// Group By from an array
function groupBy(arr, field) {
  return arr.reduce((acc, curr) => {
    const key = curr[field];

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(curr);
    return acc;
  }, {});
}

const data = [
  { name: "Happy", color: "Red" },
  { name: "Ram", color: "Green" },
  { name: "Shyam", color: "Red" },
];
console.log(groupBy(data, "color"));

// CHECK IF SECOND ARRAY HAS DOUBLE VALUES OF FIRST ARRAY
function isSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let firstCounter = {};
  let secondCounter = {};

  for (const val of arr1) {
    firstCounter[val] = (firstCounter[val] || 0) + 1;
  }

  for (const val of arr2) {
    secondCounter[val] = (secondCounter[val] || 0) + 1;
  }

  for (const key in firstCounter) {
    if (!(key ** 2 in secondCounter)) {
      return false;
    }

    if (secondCounter[key ** 2] !== firstCounter[key]) {
      return false;
    }
  }

  return true;
}
console.log(isSame([1, 2, 3], [9, 4, 1]));


// SUM OF TWO ELEMENTS IN AN ARRAY = 0 AND RETURNS THE FIRST PAIR (should be shorted array)
function zeroSum(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(zeroSum([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

// COUNT NUMBER OF UNIQUE VALUES FROM AN ARRAY
function countUnique(arr) {
  if (arr.length === 0) {
    return 0;
  }

  var i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUnique([1, 2, 2, 2, 3, 4, 5, 7, 7]));

// MAX SUM OF CONSECUTIVE NUMBERS IN AN ARRAY BASED ON PASSES NUMBER
function maxSubArraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19

// CHECK IF ARRAY HAS DUPLICATES VALUES OR NOT (PART 1)
function areThereDuplicates(args) {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(areThereDuplicates([1, 2, 2, 4]));
// CHECK IF ARRAY HAS DUPLICATES VALUES OR NOT (PART 2)
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// Get object value from string path
const getObjectValue = (obj, path) => {
  path = path.replaceAll("[", ".");
  path = path.replaceAll("]", "");

  const keys = path.split(".").filter(Boolean);

  let current = obj;

  for (const key of keys) {
    current = current[key];
  }

  if (current === undefined) {
    return undefined;
  }

  return current;
};

const obj = {
  developer: "Software Engg",
  address: {
    city: "Karnal",
  },
};
const aa = getObjectValue(obj, "address[city]");
console.log(aa);
// Get object value from string path ends here....

// SAMPLER FUNCTION
const sampler = (fn, count = 1) => {
  let track = 0;

  return function (...args) {
    track++;

    if (track === count) {
      fn(...args);
      track = 0;
    }
  };
};

function message(msg) {
  console.log(msg);
}

const sample = sampler(message, 4);

sample("1");
sample("2");
sample("3");
sample("4");
// SAMPLER FUNCTION ENDS HERE

// PIPING FUNCTION
const obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
};

function ffn(obj) {
  return function (...args) {
    for (let key in obj) {
      const val = obj[key];

      if (typeof val === "function") {
        obj[key] = val(...args);
      } else if (val && typeof val === "object" && !Array.isArray(val)) {
        ffn(val)(...args);
      }
    }
  };
}

ffn(obj)(1, 1, 1);
console.log(obj);
// PIPING FUNCTION ENDS HERE......

// Toggle Function Arguments
function toggleFunctionArguments(...args) {
  let index = 0;
  
  return function () {
   
    if (args.length) {
      if(index >= args.length) {
        index = 0;
      }

      return args[index++]
    }
  };
}

const aa = toggleFunctionArguments("Hello", "Ram", "Wink", 1);
console.log(aa());  // call this line multiple time to see the output...
// Toggle Function Arguments ends here