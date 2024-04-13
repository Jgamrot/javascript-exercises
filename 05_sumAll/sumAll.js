const sumAll = function(intA, intB) {
    let finalSum = 0;

    if ( intA < intB){

    for (let x = intA; x <= intB; x++){
        finalSum += x
    }

} else {
    for (let x = intB; x <= intA; x++){
        finalSum += x
    }

} return finalSum;
};



const result = sumAll ( 1, 4);
console.log(result);
/*input is two variables x y
use a loop
i=x, x = y, x++
start with the value of the first int
loop until the we get to the last variable (y)
loop by 1 increment each time

for each loop
let final sum = x
then take the value of x, and add to final sum

0, + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10



sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```

## Hints

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop

*/

// Do not edit below this line
module.exports = sumAll;
