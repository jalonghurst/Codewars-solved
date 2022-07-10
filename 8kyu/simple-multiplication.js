
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My solution:

function simpleMultiplication(number) {
    //   If number is even, multiply by eight, otherwise by nine if odd.
        if (number % 2 === 0) {
          return number * 8;
        } else if (number % 2 !== 0) {  
          return number * 9
        }
    }
    