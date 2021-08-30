class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertNode(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  deleteNode() {
    if (!this.head) return null;
    if (this.length > 1) {
      let temp = this.head;
      while (temp.next !== this.tail) {
        temp = temp.next;
      }
      this.tail = temp;
      temp.next = null;
      this.length--;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
      console.log("List is empty:", list);
    }
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    currentHead.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unShift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    if (this.length === 1) {
      this.tail = this.head;
    }
    return this;
  }

  getNode(pos) {
    if (pos < 0 || pos >= this.length) {
      return null;
    }
    let temp = this.head;
    let len = 0;
    while (len !== pos) {
      temp = temp.next;
      len++;
    }
    return temp;
  }

  setNode(pos, val) {
    let temp = this.getNode(pos);
    if (temp === null) return false;

    temp.data = val;
    return temp;
  }

  insertNodeAtPos(pos, val) {
    if (pos < 1 || pos > this.length) {
      return false;
    }

    let newNode = new Node(val);
    let prev = this.getNode(pos - 1);

    if (prev && pos === this.length) {
      return !!this.insertNode(val);
    } else if (prev && pos === 0) {
      return !!this.unShift(val);
    } else if (prev) {
      let temp = prev.next;

      prev.next = newNode;
      newNode.next = temp;

      this.length++;
      return this;
    } else return false;
  }

  removeNodeAtPos(pos) {
    if (pos < 0 || pos > this.length) {
      return false;
    }

    let prev = this.getNode(pos - 1);

    if (prev && pos === this.length - 1) {
      prev.next = null;
      this.tail = prev;
      this.length--;

      return this;
    } else if (pos === 0) {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.length--;

      return this;
    } else if (prev) {
      let temp = prev.next.next;

      prev.next = temp;

      this.length--;
      return this;
    } else return false;
  }

  reverse() {
    let tempnode = this.head;
    this.head = this.tail;
    this.tail = tempnode;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = tempnode.next;
      tempnode.next = prev;
      prev = tempnode;
      tempnode = next;
    }
    return this;
  }

  printList() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
// console.log(list);
// list.insertNode("1");
// console.log(list);
// list.insertNode("2");
// console.log(list);
// list.insertNode("3");
// console.log(list);
// list.insertNode("4");
// console.log(list);
// list.deleteNode();
// console.log(list);
// list.deleteNode();
// console.log(list);
// list.deleteNode();
// console.log(list);
// list.deleteNode();
// console.log(list);
// list.unShift("5");
// console.log(list);
// list.unShift("6");
// console.log(list);
// list.shift();
// console.log(list);
list.insertNode("0");
list.insertNode("2");
list.insertNode("3");
console.log(list.getNode(1));
console.log(list.getNode(-1));
list.insertNode("4");
list.printList();

console.log(list.setNode(1, "1"));
console.log(list.setNode(11, "5"));
list.printList();

list.insertNodeAtPos(2, "2");
console.log(list.insertNodeAtPos(-1, "6"));
list.insertNodeAtPos(5, "Nakul");
list.printList();
console.log(list.removeNodeAtPos(5));
list.printList();
console.log(list.removeNodeAtPos(2));
list.printList();
console.log(list.removeNodeAtPos(0));
list.printList();
console.log(list);
list.reverse();
list.printList();
// console.log(list.getNode(0));
// console.log(list.getNode(1));
// console.log(list.getNode(2));
// console.log(list.getNode(3));
// console.log(list.getNode(4));
// console.log(list.getNode(5));
// console.log(list.getNode(6));
