let now = new Date();
let p = document.querySelector("h5");

let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wedenesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

p.innerHTML = day + "  " + hours + ":" + minutes;


  function searchCity(city)
{let units ="metric"
  let apiKey = 'd56d75447f3b48def76f4849f65957c0';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
axios.get(apiUrl).then(displayWeather);
}
 
function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
   
}
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;searchCity(city);
 
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showPosition(position) {
  let lat= position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "d56d75447f3b48def76f4849f65957c0";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let positionButton = document.querySelector("#current-loc");
positionButton.addEventListener("click", getCurrentLocation);
