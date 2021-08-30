class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.size++;
    return this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    this.first = this.first.next;

    this.size--;
    return temp.data;
  }
}

let queue = new Queue();

queue.enqueue("First");
queue.enqueue("Second");
queue.enqueue("Third");
console.log(queue);

queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
