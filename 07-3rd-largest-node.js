// 7. 3rd largest node
// Write an algorithm to find the 3rd largest node in a binary search tree.

// go through tree, starting with the right obv
// get to the last node on the farthest right, which will be the largest, then back up 2 parents - nope doesn't work, will need to double back and compare!

const BinarySearchTree = require('./01-binary-tree');

let bSTree = new BinarySearchTree();

let toIns = [3,1,4,6,9,2,5,7];

toIns.forEach(el => {
  bSTree.insert(el, el);
});

const thirdLargest = (bst) => {
  if (!bst) return 'Empty tree';
  if (!bst.right) return bst.value;

  while (bst.right) {
    bst = bst.right;
  }
  let threeBigBois = [bst.value, bst.left.value, bst.parent.value];
  
  return threeBigBois.sort((a, b) => a - b)[0];
};

console.log(thirdLargest(bSTree));