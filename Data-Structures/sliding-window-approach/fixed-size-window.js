const arr = [12, -1, -7, 8, -16, 20, 16, 28];

//Output [-1.-1,-7,-16,-16, 0]

function findNegativeInWindow(arr, size, k) {
  let final = [];
  let queue = [];
  let i = 0;
  let j = 0;

  while (j < size) {
    if (arr[j] < 0) {
      queue.push(arr[j]);
    }

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (queue.length === 0) {
        final.push(0);
      } else {
        final.push(queue[0]);
        if (arr[i] === queue[0]) {
          queue.shift();
        }
      }
      i++;
      j++;
    }
  }

  return final;
}

let res = findNegativeInWindow(arr, 8, 3);
console.log(res);
