"use strict";

function Weather(cityName, description) {
  // capitalized because it is a constructor function
  this.cityName = cityName;
  this.description = description;
  this._temperature = '';
  // _ because it is not called by the function
}

Object.defineProperty(Weather.prototype, 'temperature', {
  get: function() {
    return this._temperature;
  },
  set: function(value) {
    this._temperature = (value * 1.8 + 32).toFixed(2) + 'F.';
    // converts the temperature fetched to fahrenheit
  }
});