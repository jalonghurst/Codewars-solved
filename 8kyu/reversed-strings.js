// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My solution:


function solution(str){
    //   Create an empty string 
      let newString = "";
    // Loop through string str, taking the last character from the end of the strng each time.
      for(let i = str.length - 1; i >= 0; i--) {
    // Add each end character of str to empty string with each iteration
        newString += str[i];
      }
      return newString
    }