// 9. Are they the same BSTs?
// You are given two arrays which represent two sequences of keys that are used to create two binary search trees. Write a program that will tell whether the two BSTs will be identical or not without actually constructing the tree. You may use another data structure such as an array or a linked list but don't construct the BST. What is the time complexity of your algorithm? E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but will create the exact same BSTs and your program should return true.

// * turn these into objects depending heh - that's not right because that would be constructing it

// first number has to be the same - obvious
// it says i can use something like a linked list or array..
// loop through items in each array
// split them into two depending on the starting node

let arr1 = [3, 5, 4, 6, 1, 0, 2];
let arr2 = [3, 1, 5, 2, 4, 6, 0];

const areTheyDupeTrees = (arr1, arr2) => {
  // if two arrays are different lengths, 
  // or don't have a matching root node, return false
  if (arr1.length !== arr2.length
    || arr1[0] !== arr2[0] ) return false;
  // if arrays are empty, 
  // (they're technically the same, and our base case) return true 
  if (arr1.length === 0 && arr2.length === 0) {
    return true;
  }

  // create arrays for each side of our trees 
  let arr1L =[]; let arr1R =[];
  let arr2L =[]; let arr2R =[];

  // loop through, filling our arr1 arrays seperated by root node
  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > arr1[0]) arr1L.push(arr1[i]);
    else arr1R.push(arr1[i]);
  }

  // do the same for arr2
  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > arr2[0]) arr2L.push(arr2[i]);
    else arr2R.push(arr2[i]);
  }

  // call our recursions on new arrays, which will establish the bst from 
  // this root node
  return areTheyDupeTrees(arr1L, arr2L) &&
  areTheyDupeTrees(arr1R, arr2R);
};

console.log(areTheyDupeTrees(arr1, arr2));