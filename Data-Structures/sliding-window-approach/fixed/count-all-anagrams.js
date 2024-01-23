// Count occurence of all anagrams in a string
// str = aabaabaa
// ptr = aaba
function findAnagrams(str, pattern) {
  let answer = [];
  let k = pattern.length;
  let map = new Map();

  for (let i = 0; i < k; i++) {
    map.set(pattern[i], (map.get(pattern[i]) || 0) + 1);
  }

  let count = map.size;
  let i = 0;
  let j = 0;

  while (j < str.length) {
    if (map.has(str[j])) {
      map.set(str[j], map.get(str[j]) - 1);
      if (map.get(str[j]) === 0) {
        count--;
      }
    }

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (count === 0) {
        answer.push(i);
      }

      if (map.has(str[i])) {
        map.set(str[i], map.get(str[i]) + 1);
        if (map.get(str[i]) === 1) {
          count++;
        }
      }
      i++;
      j++;
    }
  }

  return answer;
}

const res = findAnagrams("cbaebabacd", "abc");
console.log(res);
