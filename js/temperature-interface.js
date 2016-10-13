var Temperature = require('./../js/temperature.js').temperatureModule;
var Weather = require('./../js/weather.js').weatherModule;

var displayTemp = function(city, tempData) {
  $('.showWeather').text("The temperature in " + city + " is " + tempData + " kelvin");
};

var displayCelcius = function(displayTemp, celcius) {
  $('.showWeather').text("The temperature in " + city + " is " + celcius + " celcius.");
};

var displayFehrenheit = function(displayTemp, fehrenheit) {
  $('.showWeather').text("The temperature in " + city + " is " + fehrenheit + " fehrenheit.");
};

$(document).ready(function() {
  var currentTemperatureObject = new Temperature();
  var city = $('#location').val();
  $('#location').val("");
  currentTemperatureObject.getWeather(city, displayCelcius, displayFehrenheit);
  });
