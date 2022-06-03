// CLASSIC METHOD

function leapYear(x){
    if(x % 4 === 0 && (x % 100 != 0 || x % 400 === 0)){
        console.log(`${x} is a leap year`);
    }else{
        console.log(`${x} isn't a leap year`);
    }
}
console.log(leapYear(2040));
console.log(leapYear(2000));
console.log(leapYear(2021));
console.log(leapYear(1996));


// EXPRESSION
const leapYear =function(x){
    if(x % 4 === 0 && (x % 100 != 0 || x % 400 === 0)){
        console.log(`${(x)} is a leap year`);
    }else{
        console.log(`${(x)} isn't a leap year`);
    }
}
console.log(leapYear(2012));
console.log(leapYear(2000));
console.log(leapYear(2021));
console.log(leapYear(1996));


// ARROW METHOD//
const leapYear = (x) => (x % 4 === 0 && (x % 100 != 0 || x % 400 === 0)) ? `${x} is a leap year` : `${x} is not a leap year`

console.log(leapYear(2012));
console.log(leapYear(2000));
console.log(leapYear(2021));
console.log(leapYear(1996));