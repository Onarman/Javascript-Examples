//MEASURE CONVERTER
/*
 program that asks the user to enter Celsius temperature (it can be a decimal number),\
 converts the entered temperature into Fahrenheit degree and console the result.
*/


let celsisus=prompt("Please enter a temperature ('C') : ");

fahrenheit=(1.8*Number(celsisus))+32;
console.log(`Oda sıcaklığı ${fahrenheit}.F seviyesindedir.`)
