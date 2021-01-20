// 8. Balanced BST
// Write an algorithm that checks if a BST is balanced (i.e., a tree where no 2 leaves differ in distance from the root by more than 1).

const BinarySearchTree = require('./01-binary-tree');

let bSTreeTrue = new BinarySearchTree();
let bSTreeFalse = new BinarySearchTree();

let toIns1 = [3,1,4,6,9,2,5,7];
toIns1.forEach(el => {
  bSTreeTrue.insert(el, el);
  bSTreeFalse.insert(el, el);
});

bSTreeFalse.insert(12, 12);
bSTreeFalse.insert(16, 16);
bSTreeFalse.insert(19, 19);

// so this would be decided by determining if a node with only one child, has another node with only one child on the same side

const isItBalanced = (bst) => {
  if (!bst) return 'Invalid tree';
  if (!bst.right && !bst.left) return true;
  let isBalanced = true;

  const checkBalance = (b, sepLeaf = false) => {

    if (b.left && b.right) {
      checkBalance(b.right);
      checkBalance(b.left);
    }
    else if (sepLeaf === true) {
      if (b.left || b.right)
        isBalanced = false;
    }
    else if (!b.left && b.right) {
      checkBalance(b.right, true);
    }
    else if (!b.right && b.left) {
      checkBalance(b.left, true);
    }
  };

  checkBalance(bst);
  return isBalanced;
};

console.log(isItBalanced(bSTreeTrue));
console.log(isItBalanced(bSTreeFalse));