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
