/*
- quick sort (O n log n):using pivoting technique => start with pick the pivot number(by random) then compare to the list, the number that greather than pivot, go to the left and the smaller number go to the right,
then pivot stay at the same place, sorted the left and the right side of the pivot and when done then combine the left side+pivot+right side together.
*** it is one of 2 fastest algorithm
*/
let array_length;

function heap_root(input, i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    
    let temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    
    array_length = input.length;

    for (let i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
      
      
        heap_root(input, 0);
    }
}

let arr = [3, 0, 2, 5, -1, 4, 1];
heapSort(arr);
console.log(arr);
 