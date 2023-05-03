// Reverse a string using recursion
function reverseMe(s) {
  if (s === "") {
    return "";
  } else {
    return reverseMe(s.substr(1)) + s.charAt(0);
  }
}
const aa = reverseMe("Aman");
console.log(aa);

// Reverse a string without function
const str = "Ram";
let newArr = [...str];
let newStr = "";
for (let i = newArr.length; i > -1; i--) {
  if (newArr[i]) {
    newStr += newArr[i];
  }
}
console.log(newStr);

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

// Reverse Vowels in a string
const str = "Hello";
const reverseVowels = (str = "") => {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let left = 0,
    right = str.length - 1;
  let foundLeft = false,
    foundRight = false;
  str = str.split("");
  while (left < right) {
    if (vowels.has(str[left])) {
      foundLeft = true;
    }
    if (vowels.has(str[right])) {
      foundRight = true;
    }
    if (foundLeft && foundRight) {
      [str[left], str[right]] = [str[right], str[left]];
      foundLeft = false;
      foundRight = false;
    }
    if (!foundLeft) {
      left++;
    }
    if (!foundRight) {
      right--;
    }
  }
  return str.join("");
};
console.log(reverseVowels(str));

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

// Check if a string is palindrome or not
function checkPalindrome(string) {
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
console.log(checkPalindrome("rarr"));

// Check if string are isomorphic
const str1 = "abcdea";
const str2 = "eabdce";
const isIsomorphic = (str1, str2) => {
  for (let i = 0; i < str1.length; i++) {
    const a = str1.indexOf(str1[i]);
    const b = str2.indexOf(str2[i]);
    if (str2[a] !== str2[i] || str1[b] !== str1[i]) {
      return false;
    }
  }
  return true;
};
console.log(isIsomorphic(str1, str2));

// Check valid brackets pattern
const isValidBrackets = (s) => {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  for (let i = 0; i < s.length; i += 1) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else if (s[i] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};
console.log(isValidBrackets("([{])"));

// Longest palindrome
const aa = "sdsdsq,sdsdsdq,sdsdsdsdsq,sdsdsdsds,maaaaaaaaaaaaaaaam";
const bb = aa.split(",");

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return str;
}

let newArr = [];
for (let i = 0; i < bb.length; i++) {
  if (isPalindrome(bb[i])) {
    newArr.push(isPalindrome(bb[i]));
  }
}
console.log(newArr);

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

// IS TWO STRINGS ARE ANAGRAMS
function isAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(isAnagram("rat", "tra"));

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

