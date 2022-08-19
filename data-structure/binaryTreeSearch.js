/*
Binary Tree : each parant node can only have 0,1,2 child nodes and 
each child node can only have 1 parent
Good O(log n) look up,insert,delete => in the normal case and also it's in ordered and flexible
O(log n)=> partially do some n operations, performance similar to log(1)
Bad O(n) look up,insert,delete => it happends when has unbalancedTree

Weakness of binary tree could create unbalancedTree 
=> fixed by using Red Black Tree O(log n) for search insert delete or RTL O(1)for search and O(log n)for insert and delete
*/
class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.rootTree = null;
    }
    insert(value){
      const newNode = new Node(value);
      if (this.rootTree === null) {
        this.rootTree = newNode;
      } else {
        let currentNodes = this.rootTree;

        while(true){
            console.log({currentNodes});
            //if the value less than the main current node => it will go on the left
          if(value < currentNodes.value){
            //Left
            if(!currentNodes.left){
              currentNodes.left = newNode;
              return this;
            }
            //if it is already thr node there then our currennode will be the left node => keep travel
            currentNodes = currentNodes.left;
          } else {
            //Right
            if(!currentNodes.right){
              currentNodes.right = newNode;
              return this;
            }
             //if it is already thr node there then our currennode will be the right node => keep travel
            currentNodes = currentNodes.right;
          }
        }
      }
    }
    lookup(value){
      if (!this.rootTree) {
        return false;
      }
      let currentNodes = this.rootTree;
      while(currentNodes){
        if(value < currentNodes.value){
          currentNodes = currentNodes.left;
        } else if(value > currentNodes.value){
          currentNodes = currentNodes.right;
        } else if (currentNodes.value === value) {
          return currentNodes;
        }
      }
      return null
    }
    remove(value) {
      if (!this.rootTree) {
        return false;
      }
      let currentNodes = this.rootTree;
      //keep track of parent node
      let parentNode = null;

      while(currentNodes){
        //travelling down the tree
        if(value < currentNodes.value){

          parentNode = currentNodes;
          currentNodes = currentNodes.left;

        } else if(value > currentNodes.value){

          parentNode = currentNodes;
          currentNodes = currentNodes.right;

        } else if (currentNodes.value === value) {

          /* ********************************* The magic start here ****************************** */
          
          //--------------------------Option 1: No right child: --------------------------
          if (currentNodes.right === null) {
            if (parentNode === null) {
              this.rootTree = currentNodes.left;
            } else {
              
              //if parent > current value,then the current node will be the child on the left of the parent 
              if(currentNodes.value < parentNode.value) {
                parentNode.left = currentNodes.left;
              
              //if parent < current value, then the current node will be the child on the right of the parent 
              } else if(currentNodes.value > parentNode.value) {
                parentNode.right = currentNodes.left;
              }
            }
          
          //-------------------Option 2: Have Right child but the right child doesnt have a left child --------------------
          } else if (currentNodes.right.left === null) {
            currentNodes.right.left = currentNodes.left;
            if(parentNode === null) {
              this.rootTree = currentNodes.right;
            } else {
              
              //if parent > current, make right child of the left the parent
              if(currentNodes.value < parentNode.value) {
                parentNode.left = currentNodes.right;
              
              //if parent < current, make right child a right child of the parent
              } else if (currentNodes.value > parentNode.value) {
                parentNode.right = currentNodes.right;
              }
            }
          
          //--------------------------Option 3: Right child that has a left child --------------------------
          } else {
  
            //find the Right child's left most child
            let leftmost = currentNodes.right.left;
            let leftmostParent = currentNodes.right;
            while(leftmost.left !== null) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }
            
            //Parent's left subtree is now leftmost's right subtree
            leftmostParent.left = leftmost.right;
            leftmost.left = currentNodes.left;
            leftmost.right = currentNodes.right;
  
            if(parentNode === null) {
              this.rootTree = leftmost;
            } else {
              if(currentNodes.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if(currentNodes.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
        return true;
        }
      }
    }
  }
  
  const this_tree = new BinarySearchTree();
  this_tree.insert(9)
  this_tree.insert(4)
  this_tree.insert(6)
  this_tree.insert(20)
  this_tree.insert(170)
  this_tree.insert(15)
  this_tree.insert(1)
  this_tree.remove(170)
  JSON.stringify(traverse(this_tree.rootTree))
  
  //     9
  //  4     20
  //1  6  15  170
  
  //recursive function 
  function traverse(node) {
    const rootTree = { value: node.value };
    rootTree.left = node.left === null ? null : traverse(node.left);
    rootTree.right = node.right === null ? null : traverse(node.right);
    return rootTree;
  }
  