"use strict";
const URL = "https://api.weatherapi.com/v1/forecast.json";
const apiKey = "a47d1db11e5f4905b0850215241702";

class Weather {
  constructor(city, day) {
    this.city = city;
    this.day = day.date;
    this.temperature = day.day.avgtemp_f;
    this.forecast = day.day.condition.text;
  }

  displayToDOM() {
    const weatherContainer = document.getElementById("dailyWeather");
    // weatherContainer.innerHTML= '';
    weatherContainer.innerHTML += `
            <div>
            <div class="weather-card">
                <h2>${this.city}</h2>
                <p>${this.day}</p>
                <p>${this.forecast}</p>
                <p>${this.temperature}°F</p>
            </div>
            </div>
        `;
  }
}

async function getWeatherByCity(city) {
  try {
    const response = await fetch(`${URL}?key=${apiKey}&q=${city}&days=7`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const weatherData = await response.json();
    const cityName = weatherData.location.name;
    const days = weatherData.forecast.forecastday.map(
      (day) => new Weather(cityName, day)
    );
    const weatherContainer = document.getElementById("dailyWeather");
    weatherContainer.innerHTML = "";
    days.forEach((day) => day.displayToDOM());
  } catch (error) {
    console.error(error);
  }
}

const form = document.getElementById("zipcode");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  getWeatherByCity(form.elements["zip"].value);
});
