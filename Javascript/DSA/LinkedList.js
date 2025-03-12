/**
 * Linked list has data and reference
 * Ref : https://www.youtube.com/watch?v=wBtPGnVnA9g&t=42s
 * 1->2->3->4->null
 * Node 1, 2, 3 is called node, can contain data and has reference
 *
 * {
 *  data(value): 1,
 *  next : null
 * }
 *
 * - First Element of node is Called Head (1)
 * - Last Elementof node is called Tail (4)
 */

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(node) {
    this.head = new Node(node);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /**
   * need to check every item is last or not?
   *
   */
  pop() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    let prev = temp;

    // run the loop till temp.next === null
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  shift() {
    if (!this.head) return undefined;

    const temp = this.head;
    this.head = this.head.next;

    temp.next = null;
    this.length--;

    if (this.length === 0) this.tail = null;

    return temp;
  }
}

const myLinkedList = new LinkedList("00");
myLinkedList.push("01");
myLinkedList.unshift("02");
myLinkedList.shift();
console.log(myLinkedList);
