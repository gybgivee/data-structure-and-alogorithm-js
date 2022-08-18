/*
look up  : O(1)
push : O(1)/ it could be O(n) because js it is dynamic memmory
sometimes the machine take 4*4 = 16 bytes of a storage for array of 4[a,b,c,d]
then we decided to add 1 more but it not enough memory => so they need to allocated 
to a bigger space(moving each items and store) => O(n)

insert and delete : O(n)

*/
const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
//push
strings.push('e'); //O(1)

//pop
strings.pop();//O(1)
strings.pop();

//unshift need to rearrange index to all element in the array
strings.unshift('x')//O(n)

//splice
strings.splice(2, 0, 'alien');//O(n/2)=>O(n)

console.log(strings[0]); //O(1)

class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    get(index) {
      return this.data[index];
    }
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
    deleteAtIndex(index) {
      const item = this.data[index];
      this.shiftItems(index);
      return item;
    }
    shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      console.log(this.data[this.length - 1]);
      delete this.data[this.length - 1];
      this.length--;
    }
  }
  
  const myArray = new MyArray();
  myArray.push('hi');
  myArray.push('you');
  myArray.push('!');
  myArray.pop();
  myArray.deleteAtIndex(0);
  myArray.push('are');
  myArray.push('nice');
  myArray.shiftItems(0);
  console.log(myArray);
  
  