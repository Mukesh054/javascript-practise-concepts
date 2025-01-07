// String Pollyfill
if (!String.prototype.startsWith) {
  Object.defineProperty(String.startsWith, {
    value: function (search, rawPos) {
      pos = rawPos > 0 ? rawPos | 0 : 0;
      return this.substring(pos, pos + search.length) === search;
    },
  });
}

// polyfill String.prototype.includes()
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    "use strict";
    if (typeof start !== "number") {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

// Polyfill for bibn
Function.prototype.myBind = function (req, ...args) {
  return function () {
    this.call(req, args);
  };
};

// Foreach
Array.prototype.customForEach = function (callback) {
  for (i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// Map
Array.prototype.customMap = function (callback) {
  let arr = [];
  for (i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
};

// Reduce
Array.prototype.reduceAlbums = function (...args) {
  let hasInitial = args.length > 1;
  if (!hasInitial && this.length === 0) throw new Error();

  let result = hasInitial ? args[1] : this[0];
  for (let i = hasInitial ? 0 : 1; i < this.length; i++) {
    result = args[0](result, this[i], i, this);
  }

  return result;
};

// Filter
Array.prototype.filterAlbums = function (callback, context) {
  arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

// Group By Polyfill
const groupBy = (values, keyFinder) => {
  // using reduce to aggregate values
  return values.reduce((a, b) => {
    // depending upon the type of keyFinder
    // if it is function, pass the value to it
    // if it is a property, access the property
    const key = typeof keyFinder === "function" ? keyFinder(b) : b[keyFinder];

    // aggregate values based on the keys
    if (!a[key]) {
      a[key] = [b];
    } else {
      a[key] = [...a[key], b];
    }

    return a;
  }, {});
};
console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], "length"));

// Promise ALL
Promise.myAll = function (promises) {
  const _promises = promises.map((item) =>
    item instanceof Promise ? item : Promise.resolve(item)
  );

  if (_promises.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    let result = [];
    let completed = 0;
    let isError = false;

    _promises.forEach((promise, index) => {
      promise
        .then((res) => {
          if (isError) return;
          result[index] = res;

          completed++;
          if (completed === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          if (isError) return;

          isError = true;

          reject(err);
        });
    });
  });
};

// Promise.race
const race = function (promisesArray) {
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve, reject) // resolve, when any of the input promise resolves
        .catch(reject); // reject, when any of the input promise rejects
    });
  });
};

// Promise any
const any = function (promisesArray) {
  const promiseErrors = new Array(promisesArray.length);
  let counter = 0;

  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((err) => {
          promiseErrors[index] = err;
          counter++;

          if (counter === promisesArray.length) {
            reject(promiseErrors);
          }
        });
    });
  });
};
// testing promise any (make duplicates of test1 to test more cases...)
const test1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "one");
});

// Promise.allSettled
const allSettled = (promises) => {
  // map the promises to return custom response.
  const mappedPromises = promises.map((p) =>
    Promise.resolve(p).then(
      (val) => ({ status: "fulfilled", value: val }),
      (err) => ({ status: "rejected", reason: err })
    )
  );

  // run all the promises once with .all
  return Promise.all(mappedPromises);
};

// JSON_STRIGIFY polyfill
function stringify(data) {
  if (data === undefined) {
    return undefined;
  }

  if ([null, Infinity].includes(data) || data.toString() === "NaN") {
    return "null";
  }

  if (data.constructor === String) return '"' + data.replace(/"/g, '\\"') + '"';

  if (data.constructor === Number) return String(data);
  if (data.constructor === Boolean) return data ? "true" : "false";
  if (data.constructor === Array)
    return (
      "[" +
      data
        .reduce((acc, v) => {
          if (v === undefined || v === NaN || v === Infinity)
            return [...acc, "null"];
          else return [...acc, stringify(v)];
        }, [])
        .join(",") +
      "]"
    );
  if (data.constructor === Object)
    return (
      "{" +
      Object.keys(data)
        .reduce((acc, k) => {
          if (data[k] === undefined) return acc;
          else return [...acc, stringify(k) + ":" + stringify(data[k])];
        }, [])
        .join(",") +
      "}"
    );

  return "{}";
}
