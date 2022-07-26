
// DESCRIPTION:
// You are given three integer inputs: length, minimum, and maximum.

// Return a string that:

// Starts at minimum
// Ascends one at a time until reaching the maximum, then
// Decends one at a time until reaching the minimum
// repeat until the string is the appropriate length
// Examples:

//  length: 5, minimum: 1, maximum: 3   ==>  "12321"
//  length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
//  length: 11, minimum: 5, maximum: 9  ==>  "56789876567"
// Notes:

// length will always be non-negative
// negative numbers can appear for minimum and maximum values
// hyphens/dashes ("-") for negative numbers do count towards the length
// the resulting string must be truncated to the exact length provided
// return an empty string if maximum < minimum or length == 0
// minimum and maximum can equal one another and result in a single number repeated for the length of the string

// My solution: 

function ascendDescend(length, minimum, maximum) {
    let str = '';
    for (let i = minimum; i <= maximum; i++) {
        str += i
    }
    for (let i = maximum - 1; i > minimum; i--) {
        str += i
    }
    let str1 = str.repeat(length)
    return str1.substr(0, length)
  }

//   or

// function ascendDescend(len, min, max) {
//     var res = "";
//     for (var i = min; i < max; i++) res += i;
//     for (var j = max; j > min; j--) res += j;
//     if (min === max) res = min.toString();
//     return res.repeat(len).slice(0, len);
// }

