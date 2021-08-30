class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  //pop

  pop() {
    if (!this.head) return undefined;
    let tail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return tail;
  }
  //shift
  //unshift
  //getNode
  //setNode
  //insertAtPos
  //removeAtPos

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

let list = new DoublyLinkedList();
list.push("first");
list.push("second");
list.push("third");
list.push("forth");
console.log(list);
list.printList();

list.pop();
list.printList();
list.pop();
list.printList();
list.pop();
list.printList();
console.log(list);

list.pop();
console.log(list);
list.printList();
