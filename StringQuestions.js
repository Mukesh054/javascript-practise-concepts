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

// IS TWO STRINGS ARE ANAGRAMS
function isAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < first.length; i++) {
    obj1[first[i]] = (obj1[first[i]] || 0) + 1;
    obj2[second[i]] = (obj2[second[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("rat", "tra"));

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

// ++++ Word Pattern
function wordPattern(pattern, s) {
  const pattenMap = new Map();
  const rev_pattern_map = new Map();

  const wordArr = s.split(" ");

  if (pattern.length !== wordArr.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern.charAt(i);
    const word = wordArr[i];

    if (pattenMap.has(char)) {
      const val = pattenMap.get(char);

      if (val !== word) return false;
    } else {
      pattenMap.set(char, word);
    }

    if (rev_pattern_map.has(word)) {
      const val = rev_pattern_map.get(word);
      if (val !== char) return false;
    } else {
      rev_pattern_map.set(word, pattern.charAt(i));
    }
  }

  return true;
}
console.log(wordPattern("abba", "dog cat cat dog"));
// ++++ Word Pattern ends here ++++++++++++

// Reverse the vowels in a string
const vowels = ["a", "e", "i", "o", "u"];
var reverseVowels = function (s) {
  let output = s.split("");
  let cursor1 = 0;
  let cursor2 = s.length - 1;

  while (cursor1 < cursor2) {
    if (
      vowels.includes(s[cursor1].toLowerCase()) &&
      vowels.includes(s[cursor2].toLowerCase())
    ) {
      [output[cursor1], output[cursor2]] = [output[cursor2], output[cursor1]];
      cursor1++;
      cursor2--;
    }
    if (!vowels.includes(s[cursor1].toLowerCase())) {
      cursor1++;
    }
    if (!vowels.includes(s[cursor2].toLowerCase())) {
      cursor2--;
    }
  }

  return output.join("");
};

console.log(reverseVowels("hello"));

// +++++++++++++++++++++
// First Unique character in a string
function nonRepeat(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }

  return -1;
}
console.log(nonRepeat("loveleetcode"));

// ++++++++++++++
// Rotate a string and check if it is equal to goal (target string)
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  return s.concat(s).includes(goal);
};
console.log(rotateString("abcde", "deabc"));

// ++++++++++++++ How to add 2 strings without converting it to integer +++
var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let sum = [];
  let carry = 0;

  while (i >= 0 || j >= 0 || carry) {
    let n1 = num1[i] || 0;
    let n2 = num2[j] || 0;

    let curSum = parseInt(n1) + parseInt(n2) + carry;
    let reminder = curSum % 10;
    sum.push(reminder);
    carry = curSum >= 10 ? 1 : 0;
    j--;
    i--;
  }
  return sum.reverse().join("");
};
console.log(addStrings("323", "956"));

// +++++++++ Remove trailing zero ++++++
var removeTrailingZeros = function (num) {
  (i = j = 0), (str = "");

  while (num.at(-(i + 1)) == 0) i++; // count Trailing Zeros

  while (j < num.length - i) (str += num[j]), j++; // copy num to str without Trailing Zeros

  return str;
};
console.log(removeTrailingZeros("33222000"));

// +++ Longest Palindrome (return number)
function longestPalindrome(str) {
  let answer = 0;
  let obj = {};

  for (const char of str) {
    obj[char] = (obj[char] || 0) + 1;

    if (obj[char] % 2 === 0) {
      answer += 2;
    }
  }
  return str.length > answer ? answer + 1 : answer;
}
console.log(longestPalindrome("abccccdd"));

// +++++++ Max consecutive characters in a string
var maxPower = function (s) {
  let output = 1;
  let currentPower = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      currentPower++;
    } else {
      output = Math.max(output, currentPower);
      currentPower = 1;
    }
  }

  return output;
};
console.log(maxPower("abbcccddddeeeeedcba"));
