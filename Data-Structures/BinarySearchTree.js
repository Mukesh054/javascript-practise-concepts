class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    var current = this.root;

    while (true) {
      if (current.value === value) {
        return undefined;
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) {
      return false;
    }

    var current = this.root;
    var found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  // Breadth first search
  BFS() {
    var queue = [];
    var data = [];
    var node = undefined;
    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  // Depth first search (Preorder)
  // Node, left then right
  DFSPreOrder() {
    var data = [];

    function traverse(node) {
      data.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }

  // Depth first search (POST order)
  // // Entire left, then entire right, then node
  DFSPostOrder() {
    var data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  // DFSInOrder (Entire left, then node and then entire right)
  DFSInOrder() {
    var data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      data.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }

  getMin() {
    if (this.root === null) return Infinity;

    let min = Infinity;
    let queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();

      if (current.value < min) {
        min = current.value;
      }

      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }

    return min;
  }

  getMinRecursively(root = this.root) {
    if (root === null) return Infinity;

    let minLeft = this.getMinRecursively(root.left);
    let minRight = this.getMinRecursively(root.right);
    
    return Math.min(root.value, minLeft, minRight)
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(8);
tree.insert(12);
tree.insert(6);
tree.insert(9);
tree.insert(11);
tree.insert(14);

console.log(tree.getMin());
console.log(tree.getMinRecursively());
// console.log(tree);
