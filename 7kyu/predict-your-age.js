// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.


// My solution:


function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    //   Access the arguments as an array
      let args = Array.prototype.slice.call(arguments);
    //   Loop through each argument, multiply each num by itself and add to the accumuator total.
      let multiply = args.reduce((total, num) => total += (num * num), 0);
    //   Get the square root of total
      let sqrtResult = Math.sqrt(multiply);
    //   Divide result by two rounded down to nearest integer
      return Math.floor(sqrtResult / 2);
    }