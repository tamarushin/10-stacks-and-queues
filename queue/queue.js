'use strict';

class Queue {
  constructor() {
    this.storage = new Array();
  }

  enqueue(tailItem) {
    return this.storage.push(tailItem);
    //The push() method adds one or more elements to the end of an array and returns the new length of the array.
  }

  dequeue() {
    return this.storage.shift(); //The shift method removes the element at the zero index and shifts the values at consecutive indexes down, then returns the removed value. If the length property is 0, undefined is returned.
  }
}

module.exports = Queue;