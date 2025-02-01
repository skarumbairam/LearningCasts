class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  get(idx) {
    return this.data[idx];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    const firstItem = this.data[0];

    // Re-Indexing
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return firstItem;
  }

  delete(idx) {
    const deletItem = this.data[idx];
    for (let i = idx; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return deletItem;
  }

  unshift(...args) {
    const totalLength = this.length + args.length;
    // Re-Indexing
    for (let i = totalLength - 1; i >= 0; i--) {
      this.data[i] = this.data[i - args.length];
    }

    for (let i = 0; i < args.length; i++) {
      this.data[i] = args[i];
    }

    this.length = totalLength;
  }
}

const myNewArray = new MyArray();
myNewArray.push("Banana");
myNewArray.push("Orange");
myNewArray.push("Apple");
myNewArray.push("Mango");

//myNewArray.delete(2);
console.log(myNewArray.unshift("nesda", "test", "asfnask"));

console.log(myNewArray);
