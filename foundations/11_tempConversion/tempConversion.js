const convertToCelsius = function(fahrenheit) {
  celsius = (fahrenheit - 32) * 5 / 9;
  return roundOff(celsius);
};

const convertToFahrenheit = function(celsius) {
  fahrenheit = celsius * 9 / 5 + 32;
  return roundOff(fahrenheit);
};

function roundOff(number) {
  return Math.round(number * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
