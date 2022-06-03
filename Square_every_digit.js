/*===========================================================================================

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

===============================================================================================*/


// solution-1
function squareDigits(num){
    let string = num.toString();  // turn number to a string
    let results = [];             // create an array to save the new values of the string
    for (let i = 0; i < string.length; i++){  // iterate through the string
        results[i] = string[i] * string[i];   // save the square of the number to the array 
    }
    return Number(results.join(''));    // turn the array into a string and then into a number
  }

console.log(squareDigits(5115));


// solution-2

let x = "9119";
let mapped = x.split("").map((g) => g**2).join("");

console.log(mapped);