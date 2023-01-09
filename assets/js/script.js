var searchbtn = document.getElementById("searchbtn")
var searchbox = document.getElementById("searchcontent")
var usertext;
// Select the main div where the weather data will be displayed
var mainWeatherDiv = document.getElementById('mainWeatherDiv');

// API key for OpenWeatherAPI
const apiKey = "c73b072cff0fd87e69368bffee7e4662";

// Array to contain the cities to retrieve weather info for
var fiveCities = ['Sydney', 'London', 'New York', 'Beijing', 'Paris'];

// Fetch weather data for each city in the list
function getWeatherApi() {

  // Loop over each city in the array and plug it into the fetch URL
  fiveCities.forEach((city) => {

    // Fetch latitude and longitude for each city
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=c73b072cff0fd87e69368bffee7e4662`)
      .then(function(response) {

        // Convert the response to JSON format
        return response.json();
      })
      .then(function(data) {

        // Extract the lat and lon from the data
        var lat = data[0].lat;
        var lon = data[0].lon;

        // Second function call to fetch the weather data fort the city using the lat and lon
        secondFetch(lat,lon);
      })
  })
};

// Fetch weather data for a city using its lat and lon  
function secondFetch(lat, lon) {

  // URL to fetch weather data
  var weatherData = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  fetch(weatherData)
    .then(function(response){

        // converrt response to JSON format
        return response.json();
    })
    .then(function (data){
        console.log(data);

        // Create a new div to display the weather data
        var weatherElDiv = document.createElement('div');

            // Populate the div with a template literal and expressions to populate each cities info
            weatherElDiv.innerHTML = `
            <div class="card" style="width: 15rem;">
              <div class="card-body">
                <h5 class="card-title">${data.city.name}</h5>
                <img src='https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png' alt=${data.list[0].weather.description}''>
                <p class="card-text">Currently in ${data.city.name}, it feels like ${Math.trunc(data.list[0].main.feels_like)}°C</p>
              </div>
            </div>`;
            
            // Append the weatherElDiv data to the mainWeatherDiv
            mainWeatherDiv.append(weatherElDiv);
    })
};

// Call the function to retrieve data and populate the cards
getWeatherApi();

function savesearch() {
  var currentsearch = searchbox.textContent
  localStorage.setItem("currentsearch", currentsearch);
  var searchhistory = localStorage.getItem("searchhistory");
    if (searchhistory !== null) {
    searchhistory = JSON.parse(localStorage.getItem("searchhistory"))
    } else {
    searchhistory = ["Sydney"];
    }
  searchhistory.push(currentsearch)
  if (searchhistory.length > 5) {
  searchhistory.shift()
  }
  localStorage.setItem("searchhistory", JSON.stringify(searchhistory));
}

searchbox.addEventListener('input', function handleChange(event) {
  usertext = event.target.value
  event.target.textContent = usertext.trim()
});

searchbtn.addEventListener('click', savesearch);{
}

//NEWS API

var city = "Sydney";

$(document).ready(function(){
  let url = "https://newsapi.org/v2/top-headlines?q="+ city +"&category=entertainment&country=au&apiKey=1bed26309bca46a8bf7a1147ed6423aa";

//Categories: business, entertainment, general, health, science, sports, technology

  $.ajax({
    url:url,
    method:"GET",
    dataType:"Json",

    success: function(news){
      let latestNews = news.articles;
      console.log(latestNews);
      for(var i in latestNews){
        //News image pull
        $(`#imageEl-${i}`).attr("src", `${latestNews[i].urlToImage}`)
        //News title pull
        $(`#titleEl-${i}`).html(`<h1>${latestNews[i].title}</h1>`)
        //News description pull
        $(`#descriptionEl-${i}`).html(`<p>${latestNews[i].description}</p>`)
        //link to news page 
        $(`#linkEl-1`).click(function() {window.location = `${latestNews[1].url}`;});
      }
    },
  })
});

//Next and Prev buttons and interval for cycle
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false,
  next: true
})