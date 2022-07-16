// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// My solution:


function position(letter) {
    const DIFFERENCE_CHARCODE_AND_LETTERS = 96;
  
    // Convert the character into lowercase
    const myCharLowercase = letter.toLowerCase();
  
    // Find the position of the char in the alphabet
    const position = myCharLowercase.charCodeAt() - DIFFERENCE_CHARCODE_AND_LETTERS;
  
    // Return the desired message with the position
    return `Position of alphabet: ${position}`
  }

  