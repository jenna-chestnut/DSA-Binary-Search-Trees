const BinarySearchTree = require('./01-binary-tree');

let bst = new BinarySearchTree();

let toIns = [3,1,4,6,9,2,5,7];

toIns.forEach(el => {
  bst.insert(el, el);
});

const printTree = (bst) => {
  if (!bst.left && !bst.right) {
    return bst.value;
  }

  else if (bst.left && bst.right) {
    return { [bst.value] : {
      left: printTree(bst.left),
      right: printTree(bst.right)
    }};
  }

  else if (bst.left) {
    return { [bst.value] : {
      left: printTree(bst.left)
    }};
  }

  else if (bst.right) {
    return { [bst.value] : {
      right: printTree(bst.right)
    }};
  }
};

console.log(JSON.stringify(printTree(bst), undefined, 2));

module.exports = printTree;