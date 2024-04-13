const removeFromArray = function(enteredArray, ...argumentsToRemove) {
   let newArray = enteredArray.filter(function(itemInArray) {
    return !argumentsToRemove.includes(itemInArray);
});
return newArray;
};

//const result = removeFromArray([1, 2, 3, 4], [3, 2]);
//console.log(result);

// Do not edit below this line
module.exports = removeFromArray;
