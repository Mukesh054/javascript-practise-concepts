function Subject() {
  this.observers = [];
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },
  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter((fn) => fn !== fnToRemove);
  },
  fire: function () {
    this.observers.forEach((fn) => fn.call());
  },
};

// Create few observer functions
function observer1() {
    console.log('Observer 1')
}

function observer2() {
    console.log('Observer 2')
}


const subject = new Subject();
subject.subscribe(observer1)
subject.subscribe(observer2)

subject.fire();

