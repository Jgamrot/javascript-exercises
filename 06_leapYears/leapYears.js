const leapYears = function(enteredYear) {

    if (enteredYear % 4 === 0 && (enteredYear % 100 !== 0 || enteredYear % 400 === 0 )){
        return true;
    } else {
        return false;
    } 
};
console.log(leapYears(2000));
console.log(leapYears(1985));
console.log(leapYears(1996));
console.log(leapYears(1900));



/*

leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false


Create a function that determines whether or not a given year is a leap year. 
Leap years are determined by the following rules:

> Leap years are years divisible by four
However, years divisible by 100 are not leap years 
unless they are divisible by 400
*/

// Do not edit below this line
module.exports = leapYears;
