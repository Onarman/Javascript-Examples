/*
Your task it to return true if the fractional part (rounded to 1 digit) of the result (a / b) exists, more than 0 and is multiple of n. Otherwise return false. (For Python return True or False)

All arguments are positive digital numbers.

Rounding works like toFixed() method. (if more than...5 rounds up)

Find exapmles below:


isMultiple(5, 2, 3) -> false // 2.5 -> 5 is not multiple of 3
isMultiple(5, 3, 4) -> false // 1.7 -> 7 is not multiple of 4
isMultiple(5, 4, 3) -> true // 1.3 -> 3 is multiple of 3
isMultiple(666, 665, 2) -> false // 1.0 -> return false
*/

//Solution-1


function isMultiple(a, b, n) {

   let x = a/b







}console.log(isMultiple(666,665,2));
console.log(isMultiple(3691401,1892272,5));
console.log(isMultiple(5,4,3));
console.log(isMultiple(8560681, 3308197, 2));


let a = (666/665).toFixed(1);
console.log(a);

let b = (3691401/1892272).toFixed(1)
console.log(b%1);

let c = (5/4).toFixed(1)
console.log((c%1*10).toFixed(1));

let d = (8560681/3308197).toFixed(1)
console.log((c%1*10).toFixed(1));