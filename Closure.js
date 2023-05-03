function Counter() {
  var counter = 0;

  function IncreaseCounter() {
    return (counter += 1);
  }

  return IncreaseCounter;
}

var counter = Counter();
alert(counter()); // 1
alert(counter()); // 2
