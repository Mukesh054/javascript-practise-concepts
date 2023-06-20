// write custom fetch API

// "use strict";
function Fetch() {
  var url =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var options =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var xhr = new XMLHttpRequest();
  this.onFulfilment = [];
  this.onError = [];
  this.onCompletion = [];
  var method = "GET" || options.method;

  var internalFetchContext = this;

  xhr.onreadystatechange = function () {
    var _data = this;

    if (this.readyState == 4 && this.status == 200) {
      internalFetchContext.onFulfilment.forEach(function (callback) {
        callback(_data);
      });

      internalFetchContext.onCompletion.forEach(function (callback) {
        callback(_data);
      });
    } else if (this.readyState == 4 && this.status != 200) {
      internalFetchContext.onError.forEach(function (callback) {
        callback(_data);
      });
      internalFetchContext.onCompletion.forEach(function (callback) {
        callback(_data);
      });
    }
  };

  xhr.open(method, url, true);
  xhr.send();
}

Fetch.prototype.then = function (cb) {
  this.onFulfilment.push(cb);
  return this;
};

Fetch.prototype.catch = function (cb) {
  this.onError.push(cb);
  return this;
};

Fetch.prototype.finally = function (cb) {
  this.onError.push(cb);
  return this;
};

var futureData = new Fetch("https://jsonplaceholder.typicode.com/todos/1");
futureData
  .then(function (data) {
    console.log(data.response);
  })
  .catch(function (error) {
    console.log(error);
  });
