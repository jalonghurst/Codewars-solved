// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".



// My solution:


// function disemvowel(str) {
//     console.log(typeof str)
//     let newStr = ''
//     for ( s of str ) {
//       if ( s === 'a' || s === 'e' || s === 'i' || s === 'o' || s ==='u') {
//         continue
//       } else if ( s === 'A' || s === 'E' || s === 'I' || s === 'O' || s ==='U') {
//         continue
//       } else {
//         newStr += s;
//       console.log(newStr)
//       } 
//     }
//     return newStr;
//   } 

// or

  function disemvowel(str) {
    var diemvoweledStr = str.replace(/[aeiou]/gi,"");
    return diemvoweledStr;
  }
