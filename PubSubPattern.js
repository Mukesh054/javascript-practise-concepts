// PubSub.js
let subscribers = {
  // "evenName": [() => {}, () => {},]
};

module.exports = {
  publish(event, data) {
    if (!subscribers[event]) {
      return;
    }

    subscribers.event.forEach((subsciberCallback) => {
      subsciberCallback(data);
    });
  },

  subscribe(event, callback) {
    let index;
    if (!subscribers[event]) {
      subscribers[event] = [];
    }
    index = subscribers[event].push(callback) - 1;

    return {
      unsubscribe() {
        subscribers[event].splice(index, 1);
      },
    };
  },
};

// moduleA.js [Publisher file]:
const pubSub = require("./pubsub");
module.exports = {
  publishEvent() {
    const data = {
      msg: "I am from Publisher",
    };

    pubSub.publish("anEvent", data); // data is optional
  },
};

// moduleB.js [Subscriber file]:
const pubSub = require("./pubsub");
let subscription;
const moduleA = require("./moduleA");

subscription = pubSub.subscribe("anEvent", (data) => {
  console.log(`"anEvent", was published with this data: "${data.msg}"`);
});
subscription.unsubscribe();

// Create a index.js file
const moduleB = require("./moduleB");
// We use moduleA's publishEvent() method
moduleA.publishEvent();
