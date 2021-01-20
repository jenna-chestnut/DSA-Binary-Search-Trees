// 6. Is it a BST?
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.

// loop through binary from top
// if left node isn't less than and right node isn't greater than, it isn't a bst?

const isItBST = (bst) => {
  if (!bst.key || (!bst.left && !bst.right)) 
    return 'Unknown'; // if it is empty or nothing to compare

  while (bst.right || bst.left) {
    if (bst.right && !bst.right.value > bst.value) { 
      return false;
    }
    if (bst.left && !bst.left.value < bst.value) {
      return false;
    }
    bst.right = bst.right ? bst.right.right : null;
    bst.left = bst.left ? bst.left.left : null;
  }

  return true;
};