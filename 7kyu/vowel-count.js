

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// My solution: 

function getCount(str) {
    console.log(typeof str)
    let count = 0;
    for( let s of str ){
       if ( s === 'a' || s === 'e' || s === 'i' || s ==='o' || s === 'u') { 
         count += 1 
       } 
    }
    return count;
  }