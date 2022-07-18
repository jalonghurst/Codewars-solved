

// Instructions: 
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


// My solution:

function highAndLow(numbers){
    //   split string in array of strings, then sort in order low to high
      let sorted = numbers.split(' ').sort( (a,b) => a-b);
    //   first zero based index value
      let lowest = sorted[0];
    //   last zero based index value
      let highest = sorted[sorted.length-1];
    //   return in order values of last and first index of array as a string seperated with a space
      return highest + ' ' + lowest;
    }
    