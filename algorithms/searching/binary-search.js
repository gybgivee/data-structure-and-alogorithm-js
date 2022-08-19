/*

 binarySearchWithRecursive :O(2^n)
 binarySearchWithoutRecursive : O(log n)

*/
function binarySearchWithRecursive(arr, x, start, end) {
   
    //stop recursive function when go through every element in the array
    if (start > end) return false;
  
    // Find the middle index
    let mid=Math.floor((start + end)/2);
  
    // Compare mid with given key x
    if (arr[mid]===x) return true;
         
    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x){
        return recursiveFunction(arr, x, start, mid-1);
    }
    else{
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid+1, end);
    }
   
}
  


function binarySearchWithoutRecursive(arr, val){
   
	var start_index = 0;
	var end_index = arr.length;

	while(end_index > start_index){

		var mid_index = Math.floor((start_index + end_index)/2);

		if(val > arr[mid_index]){
			start_index = mid_index + 1;
		}
		else if(val < arr[mid_index]){
			end_index = mid_index;
		}
		else{
			return true;
		}
	}
	return false;
   
}
  
// Driver code
const arr = [1, 3, 5, 7, 8, 9];
const end =  arr.length-1;
const x = 5;//x=6
const t0 = performance.now();
//const result = binarySearchWithRecursive(arr, x, 0, end); //0.08 ms
const result = binarySearchWithoutRecursive(arr, x);// 0.05ms
const t1 = performance.now();

console.log(`Took ${t1 - t0} milliseconds.`);
if (result){
    console.log("Element found");
}else{
    console.log("Not found!!!");
}
