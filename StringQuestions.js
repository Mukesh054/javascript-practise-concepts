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
