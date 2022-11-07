//  Feature #1
// In your project, display the current date and time using JavaScript: Tuesday 16:00

// create a function that will format the time (inclduing from 24 time)
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  // create a function that will format the day (and put the word in there)
  let dayIndex = date.getDay();
  // put each day in a list
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  // this is what the functions should display
  return `${day} ${hours}:${minutes}`;
}

// #1:
let theDate = document.querySelector("#date");
let currentTime = new Date();
theDate.innerHTML = formatDate(currentTime);

// Feature #2
// Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

// create a function for the search bar
function search(event) {
  event.preventDefault();
  // created vars for the input and output text
  let cityName = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityName.innerHTML = cityInput.value;
}

// #2:
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// Bonus Feature
// Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.

// create a function to convert number to celcius
function convertToCelcius(event) {
  event.preventDefault();
  let temperatureType = document.querySelector("#temperature");
  temperatureType.innerHTML = 22;
}

// create a function to convert number to Far
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureType = document.querySelector("#temperature");
  temperatureType.innerHTML = 71;
}

// #3 Bonus:
let fahrButton = document.querySelector("#fahr-btn");
fahrButton.addEventListener("click", convertToFahrenheit);

let celsButton = document.querySelector("#cels-btn");
celsButton.addEventListener("click", convertToCelcius);
