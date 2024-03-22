/**
 *
 * Implement a Queue data structure using two stacks.
 * Do not  create an array inside of the Queue of the "Queue" class
 * Queue should implement add, remove, and peek.
 *
 */

const S = require("./stack");

class Queue {
  constructor() {
    this.firstStack = new S();
    this.secondStack = new S();
  }

  add(record) {
    this.firstStack.push(record);
  }

  remove() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }
    const record = this.secondStack.pop();

    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }

    return record;
  }

  peek() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }

    const record = this.secondStack.peek();

    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }

    return record;
  }
}

const q = new Queue();

q.add("item1");
q.add("item2");
q.add("item3");
q.add("item4");

console.log("After remove check peek", q.peek());
