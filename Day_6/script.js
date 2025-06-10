// 1. Implement a counter module using closures with `increment` and `decrement` methods.

const createCounter = () => {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
  };
};

const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.decrement());

// 2. Build a memoization wrapper for CPU-intensive functions.

const memoize = (fn) => {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

// Example: CPU-intensive factorial
const slowFactorial = (n) => (n <= 1 ? 1 : n * slowFactorial(n - 1));
const memoFactorial = memoize(slowFactorial);

// console.log(memoFactorial(5));
// console.log(memoFactorial(5));

// 3. Fetch data from a public API using `async`/`await`, display and handle errors.

const getData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// getData();

// 4. Create a simple pub/sub system with `subscribe`, `publish`, and `unsubscribe`.

const createPubSub = () => {
  const subscribers = {};

  return {
    subscribe(event, callback) {
      if (!subscribers[event]) subscribers[event] = [];
      subscribers[event].push(callback);
    },

    publish(event, data) {
      (subscribers[event] || []).forEach((cb) => cb(data));
    },

    unSubscribe(event, callback) {
      if (!subscribers[event]) return;
      subscribers[event] = subscribers[event].filter((cb) => cb !== callback);
    },
  };
};

// Usage
const pubSub = createPubSub();

function logger(data) {
  console.log("Received:", data);
}

pubSub.subscribe("event1", logger);
pubSub.publish("event1", { message: "Hello World!" }); // Logs the message
pubSub.unSubscribe("event1", logger);
pubSub.publish("event1", { message: "No log expected" }); // Nothing happens

// 5. Write a function to deep-clone objects, preserving nested structures without `JSON.parse`.

function deepClone(obj, visited = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (visited.has(obj)) return visited.get(obj);

  const clone = Array.isArray(obj) ? [] : {};
  visited.set(obj, clone);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], visited);
    }
  }
  return clone;
}

// Usage
const original = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: 12345,
  },
  hobbies: ["reading", { type: "adventure" }],
};

const copy = deepClone(original);
copy.address.city = "New York";
console.log(original.address.city); // Still 'Wonderland'
