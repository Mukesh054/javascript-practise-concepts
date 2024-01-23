// aabacebebebe
function longestSubstring(str, k) {
    let map = new Map();
    let i = 0;
    let j = 0;
    let max = -Infinity;
  
    while (j < str.length) {
      map.set(str[j], (map.get(str[j]) || 0) + 1);
  
      if (map.size < k) {
        j++;
      } else if (map.size === k) {
        max = max < j - i + 1 ? j - i + 1 : max;
        j++;
      } else if (map.size > k) {
        while (map.size > k) {
          map.set(str[i], map.get(str[i]) - 1);
          if (map.get(str[i]) === 0) {
            map.delete(str[i]);
          }
          i++;
        }
        j++;
      }
    }
  
    return max;
  }
  
  let res = longestSubstring("aabacebebebe", 3);
  
  console.log(res);
  