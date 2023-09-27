function longestKSubstr(s, k) {
  let map = new Map();
  let i = 0;
  let j = 0;
  let maximum = -Infinity;

  while (j < s.length) {
    map.set(s[j], (map.get(s[j]) ?? 0) + 1);

    if (map.size < k) {
      j++;
    } else if (map.size === k) {
      maximum = Math.max(maximum, j - i + 1);
      j++;
    } else if (map.size > k) {
      while (map.size > k) {
        map.set(s[i], map.get(s[i]) - 1);
        if (map.get(s[i]) <= 0) {
          map.delete(s[i]);
        }
        i++;
      }
      j++;
    }
  }

  return maximum;
}

console.log(longestKSubstr("aabacbebebe", 3));
