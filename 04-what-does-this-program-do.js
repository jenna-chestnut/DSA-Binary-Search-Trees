// 4. What does this program do?
// Without running this code in your code editor, explain what the following program does. Show with an example the result of executing this program. What is the runtime of this algorithm?

// function tree(t){
//     if(!t){
//         return 0;
//     }
//     return tree(t.left) + t.value + tree(t.right)
// }

// * this function adds the values of the root node, the left of the root node, and the right of the root node. 
// if the tree is empty we get 0.
// * let's say our tree is like this:
//       5
//    3     12
// * our result would be 20!

// i'm almost positive this would be O(1) because we directly accessing the values, and there is no searching or looping taking place.