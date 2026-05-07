const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      console.log("timerStart");
      resolve("success");
      console.log("timerEnd");
    }, 0);
    console.log(2);
  });
  
  promise.then((res) => {
    console.log(res);
  });
  
  console.log(4);

// 1 2 4 timerStart timerEnd success


// ===============================

console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
})
promise1.then(res => {
  console.log(res)
})
console.log('end');
// start 1 end 2


// ======================

let a = 5;

setTimeout(() => {
  console.log("SetTimeout: ", a);
  a = 10;
}, 0);

const p = new Promise((resolve, reject) => {
  console.log("Promise: ", a);
  a = 25;
  resolve();
});

p.then(() => {
  console.log("Promise_Then: ", a);
});

console.log("Final: ", a);
