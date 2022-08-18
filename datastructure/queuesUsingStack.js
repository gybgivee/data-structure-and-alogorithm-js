class QueueUsingStack {
    constructor() {
      this.queue = [];//first in first out
      this.stack = [];//last in first out
    }
    
    //add to the end of the queue
    enqueue(value) {
      const length = this.queue.length;
      for (let i = 0; i < length; i++) {
        //pop the last item of queue to the beginning of the stack
        this.stack.push(this.queue.pop());
      }
      this.stack.push(value);
      return this;
    }
    //remove first
    dequeue() {
      const length = this.stack.length;
      for (let i = 0; i < length; i++) {
        //because stack the last item is the newest by adding up start from the last item,at the end of this loops last queue will be the oldest
        this.queue.push(this.stack.pop());
      }
      //pop the oldest item off(the oldest=the first in)
      this.queue.pop();
      return this;
    }
    peek() {
      if (this.stack.length > 0) {
        return this.stack[0];
      }
      //last item of the queue = the first one in
      return this.queue[this.queue.length - 1];
    }
  }
  
  const myQueue = new QueueUsingStack();
  myQueue.peek();
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Pavel');
  myQueue.peek();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.peek();