const convertToCelsius = function(x) {

  return Math.round(((x - 32)*(5/9))*10)/10;
};
console.log(convertToCelsius(100));

const convertToFahrenheit = function(x) {
  
  return Math.round((x*(9/5)+32)*10)/10;
};
console.log(convertToFahrenheit(73.2));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
