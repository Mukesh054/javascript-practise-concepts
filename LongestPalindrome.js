function getLongestPalindrome(s) {
  let n = s.length;
  let index = -1,
    palindromeLength = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let isPalindrome = 1;
      for (let k = i; k <= j; k++) {
        if (s[k] != s[j - (k - i)]) {
          isPalindrome = 0;
        }
      }
      if (isPalindrome == 1 && j - i + 1 > palindromeLength) {
        index = i;
        palindromeLength = j - i + 1;
      }
    }
  }

  let ans = "";
  for (let i = index; i < index + palindromeLength; i++) {
    ans += s[i];
  }
  return ans;
}

console.log(getLongestPalindrome("aabaacus"));
