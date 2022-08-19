/*
-Merge sort O(n log n): start with divided the x to the pair, then compare inside the pair who is the smallest number then swapped,then second pair with the other pair,between these 2 pairs(2groupx2)
who is smallest number then swapped and then last round compare between thses 2 group (2groupx4) who is smallest then swapped again
*** it is stable and one of 2 fastest algorithm
*/
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)
  // console.log('left:', left);
  // console.log('right:', right);

  
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];

  //this is the couter
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length){

     //compare the value inside
     if(left[leftIndex] < right[rightIndex]){

       result.push(left[leftIndex]);
       leftIndex++;

     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  // console.log(left, right)
 console.log({result});
 //then need to concat the rest(unsort) to the string so we can repeated this again
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}


const answer = mergeSort(numbers);
console.log(answer);