// BUBBLE SORT
function bubbleSort(arr) {
  var noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }

  return arr;
}

// BUBBLE SORT ENDS

// SELECTION SORT STARTS
function selectionSort(arr) {
  const swap = (arr, elem1, elem2) =>
    ([arr[elem1], arr[elem2]] = [arr[elem2], arr[elem1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }

  return arr;
}
// SELECTION SORT ENDS

// INSERTION SORT STARTS
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    var currentVal = arr[i];

    for (let j = i - 1; j > 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}
// INSERTION SORT ENDS

// MERGE SORT STARTS HERE
//*** Both arrays should be sorted arrays
function merge(arr1, arr2) {
  let results = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = mergeSort(Math.floor(arr.length / 2));
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
// MERGE SORT ENDS HERE.....

// QUICK SORT STARTS HERE
function pivot(arr, start = 0, end = arr.length + 1) {
  const swap = (arr, elem1, elem2) =>
    ([arr[elem1], arr[elem2]] = [arr[elem2], arr[elem1]]);

  var pivot = arr[start];
  var swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);

    quickSort(arr, pivotIndex + 1, right);
  }
}

quickSort([4, 6, 9, 1, 2, 5]);
// QUICK SORT ENDS HERE
