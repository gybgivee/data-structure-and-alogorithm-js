let counter = 0;

function incrementTo4() {

    if (counter > 3) {
        return "done";
    }
    counter++;
    //incrementTo4(); 
    return incrementTo4();//fixed return undefined by add return 

}
console.log('result:', incrementTo4());//undefined
/* when this function is called the stack look like this incrementTo4(incrementTo4(incrementTo4(incrementTo4(return "done"))))
so the 4th time of the called return done but the outer layer never return anything, therefore it return undefined.
fixed by at the return keyword to the function!! <==
*/
//Time Complexity O(2^n)
const findThis = 5;
function findFactorial(number) {

    if (number === 1) {
        return 1;
    }
    return number * findFactorial(number - 1);
}
console.log('findFactorial: ', findFactorial(findThis));

//fibonacciIterative = O(n)
function fibonacciIterative(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}
console.log('fibonacciIterative: ',fibonacciIterative(6));
//fibonacciRecursive = O(2^n)
function fibonacciRecursive(n) {
    if (n < 2) {
    return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log('fibonacciRecursive: ',fibonacciRecursive(6));

//O(2^n)
function reverseString(str){
    const length = str.length;
    if(length===1){
       return str;
    }
    return str[length-1]+reverseString(str.substr(0,length-1));

}
console.log(reverseString("abcd"));