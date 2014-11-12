window.addEventListener("load", function() {
  var weather = WeatherLib.getCurrentCoordJSON(34, -5);
  
  var cityLabel = document.getElementById("#city");
  cityLabel.innerHTML = weather.location + ', ' + weather.country;
});