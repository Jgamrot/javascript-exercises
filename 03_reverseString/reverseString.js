const reverseString = function(string) {
    let myArray = Array.from(string);
    myArray.reverse();
    let newString = myArray.join("");

    return newString;

};

const result = reverseString ( "Hello there");
console.log(result);



// Do not edit below this line
module.exports = reverseString;
