const removeFromArray = function(enteredArray, argumentToRemove) {
   let newArray = enteredArray.filter(function(itemInArray) {
    return itemInArray !== argumentToRemove;
});
return newArray;
};

const result = removeFromArray([1, 2, 3, 4], 3);
console.log(result);

// Do not edit below this line
module.exports = removeFromArray;
