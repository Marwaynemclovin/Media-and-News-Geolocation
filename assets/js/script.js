var mainWeatherDiv = document.getElementById('mainWeatherDiv');

const apiKey = "c73b072cff0fd87e69368bffee7e4662";
var fiveCities = ['Sydney', 'Adelaide', 'Melbourne', 'Brisbane', 'Perth'];

function getWeatherApi() {
  
  fiveCities.forEach((city) => {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=c73b072cff0fd87e69368bffee7e4662`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var lat = data[0].lat;
        var lon = data[0].lon;
        secondFetch(lat,lon);
      })
  })
};
  
function secondFetch(lat, lon) {
  var weatherData = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  fetch(weatherData)
      .then(function(response){
          return response.json();
      })
      .then(function (data){
          console.log(data);
          var weatherElDiv = document.createElement('div');
                  weatherElDiv.innerHTML = `
                  <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${data.city.name}</h5>
                      <img src='https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png' alt=${data.list[0].weather.description}''>
                      <p class="card-text">Currently in ${data.city.name}, it feels like ${data.list[0].main.feels_like}</p>
                    </div>
                  </div>`;
                  mainWeatherDiv.append(weatherElDiv);
      })
};
  
getWeatherApi();
