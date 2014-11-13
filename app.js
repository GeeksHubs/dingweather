var updateCity = function(city) {
  var weather = WeatherLib.getCurrentCityJSON(city);
  if (weather === undefined) {
    alert("The city" + city + " was not found");
    return;
  }
  
  var cityLabel = document.getElementById("#city");
  var maxTempLabel = document.getElementById("#max_temp");
  var minTempLabel = document.getElementById("#min_temp");
  var descLabel = document.getElementById("#desc");
  cityLabel.innerHTML = weather.location + ', ' + weather.country;
  maxTempLabel.innerHTML = weather.temp_max;
  minTempLabel.innerHTML = weather.temp_min;
  descLabel.innerHTML = weather.long_desc;
};

window.addEventListener("load", function() {
  var searchCityForm = document.forms["#searchCityForm"];
  searchCityForm.addEventListener("submit", function (event) {
    event.preventDefault();
    updateCity(searchCityForm.elements["city"].value);
  });
  
  updateCity("Valencia");
});