function getWeatherApi() {
    var requestCoords = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=c73b072cff0fd87e69368bffee7e4662`;
    var weatherData = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${c73b072cff0fd87e69368bffee7e4662}`
  
    fetch(requestCoords)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // ASSIGN VAR FOR LAT AND LON
        var lat = data.coords.lat;
        var lon = data.coords.lon;
        secondFetch(lat, lon);
        for (var i = 0; i < data.length; i++) {
          var listItem = document.createElement('li');
          listItem.textContent = data[i].html_url;
        //   fix this: repoList.appendChild(listItem);
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
            // write code to put info into card in widget
        })
  }
  
//   fetchButton.addEventListener('click', getApi);