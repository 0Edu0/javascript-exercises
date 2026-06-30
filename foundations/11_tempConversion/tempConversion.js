const convertToCelsius = function(celsius) {
  let calculator = ((celsius - 32) * (5/9));
  let round = Math.round(calculator * 10) / 10;

  return round;
};

const convertToFahrenheit = function(farenheit) {
  let calculator = ((farenheit * (9/5) + 32));
  let round = Math.round(calculator * 10) / 10;

  return round;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
