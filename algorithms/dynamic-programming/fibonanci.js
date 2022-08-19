//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0;
function fibonacciRecursive(n) { //O(2^n)
  
  if (n < 2) {
    return n
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

function fibonacciMemmo() { //O(n)

 //using closure so fibCallback => can access cache
  let cache = {};

  return function fibCallback(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fibCallback(n-1) + fibCallback(n-2);
        return cache[n];
      }
    }
  }
}

//O(n) using bottom up approach
function fibonacciMemmo_array(n) {
  let answer = [0,1];
  for ( let i = 2; i <= n; i++) {
    answer.push(answer[i-2]+ answer[i-1]);
  }
  return answer.pop();
}



console.log('Slow', fibonacciRecursive(35))
console.log('DP fibonacciMemmo', fibonacciMemmo(100));
console.log('DP fibonacciMemmo_array', fibonacciMemmo_array(100));
console.log('we did ' + calculations + ' calculations');

