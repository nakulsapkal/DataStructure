class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insertNode(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (val === currentNode.data) return undefined;
      if (val < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  findNode(val) {
    if (!this.root) return null;
    let currentNode = this.root;
    while (true) {
      if (val === currentNode.data) return currentNode;
      if (val < currentNode.data && currentNode.left !== null) {
        currentNode = currentNode.left;
      } else if (val > currentNode.data && currentNode.right !== null) {
        currentNode = currentNode.right;
      } else {
        return false;
      }
    }
  }
}

let tree = new BST();

tree.insertNode(10);
tree.insertNode(5);
tree.insertNode(13);
tree.insertNode(2);
tree.insertNode(7);
tree.insertNode(11);
tree.insertNode(16);
tree.insertNode(16);

console.log(tree);

console.log("==================");
console.log(tree.findNode(10));
console.log(tree.findNode(16));
console.log(tree.findNode(6));
