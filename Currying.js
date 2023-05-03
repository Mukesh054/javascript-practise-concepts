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
