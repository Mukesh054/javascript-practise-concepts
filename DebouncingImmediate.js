const debounce = (func, wait, immediate) => {
  // 'private' variable to store the instance
  // in closure each timer will be assigned to it
  let timeout;

  // debounce returns a new anonymous function (closure)
  return function () {
    // reference the context and args for the setTimeout function
    let context = this,
      args = arguments;

    // should the function be called now? If immediate is true
    // and not already in a timeout then the answer is: Yes
    const callNow = immediate && !timeout;

    // base case
    // clear the timeout to assign the new timeout to it.
    // when event is fired repeatedly then this helps to reset
    clearTimeout(timeout);

    // set the new timeout
    timeout = setTimeout(function () {
      // Inside the timeout function, clear the timeout variable
      // which will let the next execution run when in 'immediate' mode
      timeout = null;

      // check if the function already ran with the immediate flag
      if (!immediate) {
        // call the original function with apply
        func.apply(context, args);
      }
    }, wait);

    // immediate mode and no wait timer? Execute the function immediately
    if (callNow) func.apply(context, args);
  };
};

function onMouseMove(e) {
  console.clear();
  console.log(e.x, e.y);
}

// define the debounced function
const debouncedMouseMove = debounce(onMouseMove, 50, true);

// call the debounced function on every mouse move
window.addEventListener("mousemove", debouncedMouseMove);
