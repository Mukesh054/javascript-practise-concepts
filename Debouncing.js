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
    console.log("LOL........");
    // Make API calls....
  }, 3000)
);

// Debouncing works after a specific time difference between the last event occured......
