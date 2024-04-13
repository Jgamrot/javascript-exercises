const repeatString = function(givenString, numberOfRepeats) {
    let returnedString = "";
    if (numberOfRepeats >= 0) {
for (let x=1; x <= numberOfRepeats ; x++){
    returnedString += givenString;
}
return returnedString;

    }    else { return "ERROR"}
};

const result = repeatString ( "hey", 3);
console.log(result);



// Do not edit below this line
module.exports = repeatString;
