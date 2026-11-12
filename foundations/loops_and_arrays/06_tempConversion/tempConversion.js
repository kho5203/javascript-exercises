// C = (F - 32) * (5/9)
const convertToCelsius = function (fahr) {
  const celsius = Number(((fahr - 32) * (5 / 9)).toFixed(1));
  return celsius;
};

// F = (C * 1.8) + 32
const convertToFahrenheit = function (cels) {
  const fahrenheit = Number((cels * 1.8 + 32).toFixed(1));
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
