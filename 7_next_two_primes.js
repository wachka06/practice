/***********************************************************************
Write a function `nextTwoPrimes(num)` that takes in a number `num` and
returns the next two prime numbers greater than `num`.

Examples:
nextTwoPrimes(2); // => [ 3, 5 ]
nextTwoPrimes(3); // => [ 5, 7 ]
nextTwoPrimes(7); // => [ 11, 13 ]
nextTwoPrimes(8); // => [ 11, 13 ]
nextTwoPrimes(20); // => [ 23, 29 ]
nextTwoPrimes(97); // => [ 101, 103 ]
***********************************************************************/

function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

function nextTwoPrimes(n) {
  let result = []

    for (i = n + 1; true; i++) {
      if (isPrime(i)) {
        result.push(i)
        if (result.length === 2) {
          break
        }
      }
    }

  return result
}

console.log(nextTwoPrimes(2)); // => [ 3, 5 ]
console.log(nextTwoPrimes(3)); // => [ 5, 7 ]
console.log(nextTwoPrimes(7)); // => [ 11, 13 ]
console.log(nextTwoPrimes(8)); // => [ 11, 13 ]
console.log(nextTwoPrimes(20)); // => [ 23, 29 ]
console.log(nextTwoPrimes(97)); // => [ 101, 103 ]
