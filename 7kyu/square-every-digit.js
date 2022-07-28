// In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// My solution:

function squareDigits(num){
  
    let numArr = String(num).split("").map((num)=>{
      return Number(num)
    })   
    
     let powResult = [];
      for ( i of numArr) { Number(powResult += Math.pow(i, 2)) }   
       return Number(powResult)  
      
      }