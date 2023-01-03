
var weatherElCity1 = document.getElementById("weatherCard1")
var weatherElCity2 = document.getElementById("weatherCard2")
var weatherElCity3 = document.getElementById("weatherCard3")
var weatherElCity4 = document.getElementById("weatherCard4")
var weatherElCity5 = document.getElementById("weatherCard5")

function getWeatherApi() {
  var requestCoords = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=c73b072cff0fd87e69368bffee7e4662`;
  var weatherData = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${c73b072cff0fd87e69368bffee7e4662}`

  fetch(requestCoords)
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
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>`
        weatherElCity2.innerHTML = `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">CITY NAME</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>`
      }
    });
}
  
function secondFetch(lat, lon) {
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
