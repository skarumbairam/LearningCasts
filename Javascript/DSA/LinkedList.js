/**
 * Linked list has data and reference
 *
 * 1->2->3->4->null
 * Node 1, 2, 3 is called node, can contain data and has reference
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
}

const myLinkedList = new LinkedList(1);
console.log(myLinkedList);
