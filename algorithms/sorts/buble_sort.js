//O(n^2)
/*
- Buble sort : start with a pair, check the value in a pair, if the right more than the left, then swapped. 
=> then go to the next pair repeated this again for the number of the x
*/
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) { 
      if(array[j] > array[j+1]) {
        //Swap the numbers
        /*
        swap  wi

        
        a = a+b;
        b = a-b;//(a+b)-b then it is a
        a = a-b;//(a+b)-a then it is b
        array[j] =  array[j] + array[j+1];   
        array[j+1] = array[j] - array[j+1];   
        array[j] =  array[j] - array[j+1];   
        */
        let temp = array[j]
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }        
  }
}

bubbleSort(numbers);
console.log(numbers);