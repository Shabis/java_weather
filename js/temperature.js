Temperature = function() {
};

Temperature.prototype.getCelcius = function() {
  var celcius = displayTemp - 273.15;
  return celcius;
};

Temperature.prototype.getFehrenheit = function() {
  var fehrenheit = (displayTemp * (9/5)) - 459.67;
  return fehrenheit;
};

exports.temperatureModule = Temperature;
