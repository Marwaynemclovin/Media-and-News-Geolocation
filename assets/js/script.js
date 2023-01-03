
var weatherElCity1 = document.getElementById("weatherCard1")
var weatherElCity2 = document.getElementById("weatherCard2")
var weatherElCity3 = document.getElementById("weatherCard3")
var weatherElCity4 = document.getElementById("weatherCard4")
var weatherElCity5 = document.getElementById("weatherCard5")

function getWeatherApi() {
  var requestCoordsSyd = `https://api.openweathermap.org/geo/1.0/direct?q=Sydney&limit=5&appid=c73b072cff0fd87e69368bffee7e4662`;
  var requestCoordsAde = `https://api.openweathermap.org/geo/1.0/direct?q=Adelaide&limit=5&appid=c73b072cff0fd87e69368bffee7e4662`;
  var requestCoordsMel = `https://api.openweathermap.org/geo/1.0/direct?q=Melbourne&limit=5&appid=c73b072cff0fd87e69368bffee7e4662`;
  var requestCoordsBri = `https://api.openweathermap.org/geo/1.0/direct?q=Brisbane&limit=5&appid=c73b072cff0fd87e69368bffee7e4662`;
  var requestCoordsPer = `https://api.openweathermap.org/geo/1.0/direct?q=Perth&limit=5&appid=c73b072cff0fd87e69368bffee7e4662`;
  fetch(requestCoordsSyd)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      secondFetch(lat, lon);
      var lat = data.coords.lat;
      var lon = data.coords.lon;
      for (var i = 0; i < data.length; i++) {
        weatherElCity1.innerHTML = `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">CITY NAME</h5>
            <p class="card-text" id= "temp">TEMP</p>
            <p class="card-text">forecast img</p>
            <p class="card-text">forecast text</p>
          </div>
        </div>`
    }});
  fetch(requestCoordsAde)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      secondFetch(lat, lon);
      var lat = data.coords.lat;
      var lon = data.coords.lon;
      for (var i = 0; i < data.length; i++) {
        weatherElCity2.innerHTML = `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">CITY NAME</h5>
            <p class="card-text" id= "temp">TEMP</p>
            <p class="card-text">forecast img</p>
            <p class="card-text">forecast text</p>
          </div>
        </div>`
      }});
  fetch(requestCoordsMel)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      secondFetch(lat, lon);
      var lat = data.coords.lat;
      var lon = data.coords.lon;
      for (var i = 0; i < data.length; i++) {
        weatherElCity3.innerHTML = `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">CITY NAME</h5>
            <p class="card-text" id= "temp">TEMP</p>
            <p class="card-text">forecast img</p>
            <p class="card-text">forecast text</p>
          </div>
        </div>`
      }});
  fetch(requestCoordsBri)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      secondFetch(lat, lon);
      var lat = data.coords.lat;
      var lon = data.coords.lon;
      for (var i = 0; i < data.length; i++) {
        weatherElCity4.innerHTML = `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">CITY NAME</h5>
            <p class="card-text" id= "temp">TEMP</p>
            <p class="card-text">forecast img</p>
            <p class="card-text">forecast text</p>
          </div>
        </div>`
      }});
  fetch(requestCoordsMel)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      secondFetch(lat, lon);
      var lat = data.coords.lat;
      var lon = data.coords.lon;
      for (var i = 0; i < data.length; i++) {
        weatherElCity5.innerHTML = `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">CITY NAME</h5>
            <p class="card-text" id= "temp">TEMP</p>
            <p class="card-text">forecast img</p>
            <p class="card-text">forecast text</p>
          </div>
        </div>`
      }});
}
  
function secondFetch(lat, lon) {
  var weatherData = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${c73b072cff0fd87e69368bffee7e4662}`
  //second fetch 
  fetch(weatherData)
      .then(function(response){
          return response.json();
      })
      .then(function (data){
          console.log(lat, lon);
      })
}
  
getWeatherApi();
