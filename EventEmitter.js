class EventEmitter {
  listeners = {};

  on(eventName, callback) {
    if (!this.isExist(eventName)) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(callback);
  }

  emit(eventName, data) {
    if (!this.isExist(eventName)) {
      throw new Error(`Event ${eventName} does not exist.`);
    }

    this.listeners[eventName].forEach((callback) => callback(data));
  }

  removeListener(eventName, listenerToRemove) {
    if (!this.isExist(eventName)) {
      throw new Error(`Can not remove ${eventName}`);
    }

    this.listeners[eventName].filter(
      (listener) => listener !== listenerToRemove
    );
  }

  isExist(eventName) {
    return !!this.listeners[eventName];
  }
}


// Usage
const handleMyEvent = (data) => {
	console.log('Was fired: ', data);
 };

const myEventEmitter = new EventEmitter();
myEventEmitter.on('testEvent', handleMyEvent);

myEventEmitter.emit('testEvent', 'Hello World.....');