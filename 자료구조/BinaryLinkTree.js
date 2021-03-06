class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  findInsertdata(data, node) {
    if (node.data > data) {
      if (node.left === null) {
        node.left = new Node(data);
      } else {
        this.findInsertdata(data, node.left)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(data);
      } else {
        this.findInsertdata(data, node.right)
      }
    }
  }

  insertData(data) {
    if (this.root === null) {
      this.root = new Node(data);
      return;
    }
    this.findInsertdata(data, this.root);
  }
}
const inOrder = (node) => {
  if (node === null) {
    return ;
  }
  inOrder(node.left)
  console.log(node.data);
  inOrder(node.right)
}

const preOrder = (node) => {
  if (node === null) {
    return ;
  }
  console.log(node.data);
  preOrder(node.left)
  preOrder(node.right)
}

const postOrder = (node) => {
  if (node === null) {
    return ;
  }
  postOrder(node.left)
  postOrder(node.right)
  console.log(node.data);
}

const levelOrdder = (node) => {
  if (node === null) {
    return ;
  }
  const queue = [];
  queue.push(node);
  while (queue.length !== 0) {
    const target = queue.shift();
    if (target === null) {
      continue
    }
    console.log(target.data);
    queue.push(target.left);
    queue.push(target.right);
  }
}
const init = () => {
  const binary = new BinaryTree();
  binary.insertData(50);
  binary.insertData(25);
  binary.insertData(10);
  binary.insertData(15);
  binary.insertData(30);
  binary.insertData(70);
  binary.insertData(60);
  console.log('전위 순회');
  preOrder(binary.root);
  console.log('중위 순회');
  inOrder(binary.root);
  console.log('후위 순회');
  postOrder(binary.root);
  console.log('레벨 순회라 쓰고 bfs라고 읽는다');
  levelOrdder(binary.root)
}

init();