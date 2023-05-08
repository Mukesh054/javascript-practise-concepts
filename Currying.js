function volume(l, h, w) {
  return l * h * w;
}

function curry(fn, ...args) {
  return (..._arg) => {
    return fn(...args, ..._arg);
  };
}

const hCy = curry(volume, 10, 4);
console.log(hCy(2)); // 80

//======================= Second option

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

console.log(add(5)(2)(4)(5)());

// Infinite currying
function adding(...arg) {
  return function clousureReturn(...arg1) {
    if (!arguments.length) {
      let finalArr = [...arg, ...arg1];
      let total = finalArr.reduce((sum, ele) => sum + ele);
      return total;
    }

    return adding(...arg, ...arg1);
  };
}

let a = adding(1, 2)(2)(4, 3);
console.log(a());

// Special Case::
let curry = (fn) => {
  // helper function
  let helper = (...args) => {
    // if we are receiving the expected number of arguments
    if (args.length >= fn.length) {
      // pass it to callback fn
      return fn(...args);
    } else {
      // return a new function that will accept the remaining arguments
      let temp = (...args2) => {
        // recursively call the same function
        // to validate if we have received the required amount
        // of arguments
        return helper(...args, ...args2);
      };

      // return the function
      return temp;
    }
  };

  // return helper
  return helper;
};

function sum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3, 4, 5));
console.log(curriedSum(1)(2, 3)(4));
console.log(curriedSum(1)(2)(3)(4));

// More Special case::

function add(...x) {
  // store the current arguments
  let sum = x;

  function resultFn(...y) {
    // merge the new arguments
    sum = [...sum, ...y];
    return resultFn;
  }

  // override the valueOf to return sum
  resultFn.valueOf = function () {
    return sum.reduce((a, b) => a + b, 0);
  };

  // extend the valueOf
  resultFn.value = resultFn.valueOf;

  // return the inner function
  // on any primitive action .valueOf will be invoked
  // and it will return the value
  return resultFn;
}

// expected output.
// add(1)(2).value() = 3;
// add(1, 2)(3).value() = 6;
// add(1)(2)(3).value() = 6;
// add(1)(2) + 3 = 6;
