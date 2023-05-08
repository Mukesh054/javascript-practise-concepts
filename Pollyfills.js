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
Array.prototype.reduceAlbums = function (callback, initialValue) {
  var accumulator = initialValue === undefined ? undefined : initialValue;

  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
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
    const key = typeof keyFinder === 'function' ? keyFinder(b) : b[keyFinder];
    
    // aggregate values based on the keys
    if(!a[key]){
      a[key] = [b];
    }else{
      a[key] = [...a[key], b];
    }
    
    return a;
  }, {});
};
console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], "length")); 


// Promise ALL
Promise.myAll = function (values) {
  return new Promise((resolve, reject) => {
    let output = [];
    let completd = 0;
    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((res) => {
          output[index] = res;

          if (completd === values.length) {
            resolve(output);
          }
        })
        .catch((err) => reject(err.message));
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