// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// My solution:


function solution(str, ending){
    let lastChar = str.slice(-ending.length);
    console.log(str, ending, lastChar)
   if (ending === lastChar || ending === '') {
     return true
   } else {
     return false
   }
  }