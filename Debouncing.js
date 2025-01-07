// Debouncing works after a specific time difference between the last event occured......
const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      clearTimeout(timeout);
      func(...args);
    }, wait);
  };
};

window.addEventListener(
  "resize",
  debounce(function () {
    console.log("Make api calls here.....");
    // Make API calls....
  }, 3000)
);

