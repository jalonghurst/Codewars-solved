// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// My solution: 


function solution(number){
    let multiples = [];
    for ( let i = 0; i < number; i++) {
      if ( number >= 0 && i % 3 === 0 || number >= 0 && i % 5 === 0) {
// If a multiple of both 3 and 5 is already included in the array, continue the loop without pushing, else push onto the array.
        if (multiples.includes(i % 3 === 0 && i % 5 === 0)) {
          continue
        } else {
        multiples.push(i);
        }
// If the number passed as an argument is a negative number -
      } else if (number < 0) {
        return 0;
      }
    }
//    Loop through the array multiples to recieve total sum of elements  
    return (multiples.reduce( (sum, i) => sum + i, 0 ))
    
}