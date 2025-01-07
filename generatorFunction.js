//https://jrsinclair.com/articles/2022/why-would-anyone-need-javascript-generator-functions/

// Define a function named customAsyncGeneratorFunction that takes a generator function as an argument
function customAsyncGeneratorFunction(generatorFunction) {
  // Return a function
  return function () {
    // Create and assign the generator object
    const generator = generatorFunction();

    // Define a function that accepts the next iteration of the generator
    function resolve(next) {
      // If the generator is closed and there are no more values to yield,
      // resolve the last value
      if (next.done) {
        return Promise.resolve(next.value);
      }

      // If there are still values to yield, they are promises and
      // must be resolved.
      return Promise.resolve(next.value).then((response) => {
        return resolve(generator.next(response));
      });
    }

    // Begin resolving promises
    return resolve(generator.next());
  };
}

const getUsers = customAsyncGeneratorFunction(function* () {
  const response = yield fetch("https://jsonplaceholder.typicode.com/users");
  const json = yield response.json();

  return json;
});

// Invoking the function
// getUsers().then((response) => console.log(response));

// CUSTOM ITERATOR CREATION
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    
    return {
      next: function () {
        step++;

        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }

        return { value: undefined, done: true };
      },
    };
  },
};

for (const word of obj) {
  console.log(word);
}
