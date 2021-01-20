// 5. Height of a BST
// Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?
const BinarySearchTree = require('./01-binary-tree');

let bSTree = new BinarySearchTree();

let toIns = [3,1,4,6,9,2,5,7];

toIns.forEach(el => {
  bSTree.insert(el, el);
});

const findHeight = (bst) => {
  if (!bst.key) return 0; // if it is empty
  if (!bst.left && !bst.right) { // if root node is only one
    return 1;
  }

  const compare = (btl, btr) => {
    let l = countLevels(btl); 
    let r = countLevels(btr);
    return l > r ? l : r;
  };

  const countLevels = (b) => {
  
    if (!b.left && !b.right) { // if this is a leaf node, no more levels
      return null;
    }

    // if we have children on either side, we will 
    // count this level and run recursive
    if (b.left && b.right) { 
      const height = compare(b.left, b.right);
      return 1 + height; // find longest side if there are two
    }
    else if (b.left) {
      return 1 + countLevels(b.left);
    }
    else if (b.right) {
      return 1 + countLevels(b.right);
    }
  };

  const height = compare(bst.left, bst.right);

  return 1 + height + 1; // include our root level and bottom level
};

console.log(findHeight(bSTree)); // should be five

// O(n) because it is wholly dependent on size of our tree!