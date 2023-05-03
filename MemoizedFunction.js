function doMemoize(fn, context) {
  var res = {};

  return function (...args) {
    var argsCache = JSON.stringify(args);

    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const getResults = (a, b) => {
  for (let index = 0; index < 10000; index++) {}

  return a * b;
};

const memoizedData = doMemoize(getResults);

console.log(memoizedData(3, 5));
