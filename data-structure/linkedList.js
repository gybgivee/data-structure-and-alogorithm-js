/*
Good (fast),O(1): prepend(insert head),append(insert last)
Bad (slow) ,O(n):look up,insert(any other),delete
*/

class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    //add from the end/tail
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    //add to the front
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      if (index === 0) {
        this.prepend(value);
        return this.printList();
      }
     
      const newNode = {
        value: value,
        next: null
      }
      
      const leader = this.findLinkedListFromIndex(index-1);
      const nextPointer = leader.next;
      
      leader.next = newNode;
      newNode.next = nextPointer;

      this.length++;
      return this.printList();
    }
    findLinkedListFromIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      //stop when index === counter 
      return currentNode;
    }
    remove(index) {
      // Check Parameters      
      const leader = this.findLinkedListFromIndex(index-1);
      const unwantedNode = leader.next;
      //point to next linked list so it will remove unwantedNode
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.insert(2, 99);
  myLinkedList.insert(5, 88);
  //myLinkedList.remove(2);
  console.log(myLinkedList.printList());