class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // if tree is empty, start our tree!
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }

    //otherwise, we want to search for where this value can be stored.
    // if the below conditional is true, it means our node should be to the left of our root node
    else if (key < this.key) {
      // check to see if the left node already exists.. if not, pop in our new tree
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value);
      }
      // if so, run this function again starting with the left node!
      else {
        this.left.insert(key, value);
      }
    }
    // same thing on the right side!
    else if (key > this.key) {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) { // same logic will apply here
    if (this.key === null) {
      return null;
    }
    if (this.key === key) {
      return this.value;
    }
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    else {
      throw new Error('Key error');
    }
  }

  remove(key) {

    // * if it's exactly what we're looking for 
    if (this.key === key) {

      // check to see if it has left & right nodes
      if (this.left && this.right) {

        // if so, find the minimum value on the right side of our tree to replace
        // the key, to ensure proper hierarchy!
        const successor = this.right._findMin();

        // set this key to that key instead
        this.key = successor.key;

        // set this value to that value
        this.value = successor.value;

        // actually delete the minimum value on the right side 
        // since it has officially been relocated
        successor.remove(successor.key);
      }

      // if there is only a left node, simply replace this key
      else if (this.left) {
        this._replaceWith(this.left);
      }

      // same with the right
      else if (this.right) {
        this._replaceWith(this.right);
      }

      // otherwise, just remove the leaf node!
      else {
        this._replaceWith(null);
      }
    }

    // * if not, recursively search
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    // * and the same for the right side
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    // * and if the key just doesn't exist...
    else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    // if the node we are replacing has a parent
    if (this.parent) {
      // check to see how the node is connected to the parent 
      // and set it so that the parent node now points to replacement
      if (this === this.parent.left) {
        this.parent.left = node;
      }
      if (this === this.parent.right) {
        this.parent.right = node;
      }
      // and set our replacement node.parent to the parent
      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      // because this function is also used to REMOVE a node, 
      // we check to see if our 'node' is actually null
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {

    // this is our base case, there are no more left nodes and therefore no lesser values
    if (!this.left) {
      return this;
    }
    
    // if there is  left node on this one, there is a smaller value!
    // keep searching recursively!
    return this.left._findMin();
  }
}

module.exports = BinarySearchTree;