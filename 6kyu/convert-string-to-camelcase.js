// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// My solution:

function toCamelCase(str){
    console.log(str)
    
    if (str === '') {
      return ''
    }
    
    let change = function() {
      if (str.includes('_')) {
        return str.split('_')
      } else if (str.includes('-')) {
        return  str.split('-')
       } 
        
        } 
        console.log(change())
        let result = (change())
        console.log( result)
  
        let newStr = ''
          for (let i in result ) {
            if (i > 0 ){
          newStr += result[i].charAt(0).toUpperCase() + result[i].slice(1)
          } else 
        newStr += result[i]
      }
  
       return newStr
  
    }


    // or 

    // function toCamelCase(str){
    //     return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
    //   }