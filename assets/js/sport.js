var searchbtn = document.getElementById("searchbtn")
var searchbox = document.getElementById("searchcontent")
var usertext;
var requestUrl = "https://api.api-ninjas.com/v1/trivia?category=sportsleisure";
var trivRe = document.getElementById('trivRe');
var question1 = document.getElementById('trivQ1')
var question2 = document.getElementById('trivQ2')
var ans1 = document.getElementById('trivAns1')
var ans2 = document.getElementById('trivAns2')
var trivObj
var trivObj2

function getApi() {

fetch(requestUrl, {method: "GET",
headers: {
  "X-Api-Key": "gZzw7wCLD8ovL55hev8tyQ==NQihzrRuODoXwYee"
}
}) 
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    trivObj = data[0];
     question1.innerHTML = trivObj.question
     ans1.innerHTML = trivObj.answer
    return data
  });
}
function getApi2() {

    fetch(requestUrl, {method: "GET",
    headers: {
      "X-Api-Key": "gZzw7wCLD8ovL55hev8tyQ==NQihzrRuODoXwYee"
    }
    }) 
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        trivObj2 = data[0];
         question2.innerHTML = trivObj2.question
         ans2.innerHTML = trivObj2.answer
        return data
      });
    }
function populateTriv() {
    getApi ()
    getApi2 ()
 }
trivRe.addEventListener('click', populateTriv);
populateTriv ()

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
