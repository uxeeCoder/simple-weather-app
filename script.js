// 'use strict';
// const URL = "https://api.weatherapi.com/v1/forecast.json";
// const apiKey = "a47d1db11e5f4905b0850215241702";
// // const URL= "https://api.weatherapi.com/v1/forecast.json?key=a47d1db11e5f4905b0850215241702&q=11001&days=7";
// class Weather {
//     constructor(city, day) {
//         this.city = city;
//         this.day = day.date;
//         this.temperature = day.day.avgtemp_f;
//         this.forecast = day.day.condition.text;
//     }

//     displayToDOM() {
//         // Implement this method to display weather data on the DOM
//         console.log(`${this.day} in ${this.city}: ${this.forecast}, Temperature: ${this.temperature}°F`);
//     }
// }
// function displayToDOM(weatherData) {
//     const weatherContainer = document.getElementById('dailyWeather');
//     weatherContainer.innerHTML += `
//         <div class="weather-card">
//             <h2>${weatherData.city}</h2>
//             <p>${weatherData.day}</p>
//             <p>${weatherData.forecast}</p>
//             <p>${weatherData.temperature}°F</p>
//         </div>
//     `;
// }

//     async function getWeatherByCity(city) {
//         try {
//             const response = await fetch(`${URL}?key=${apiKey}&q=${city}&days=7`);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const weatherData = await response.json();
//             const cityName = weatherData.location.name;
//             const days = weatherData.forecast.forecastday.map(day => new Weather(cityName, day));
//             days.forEach(day => day.displayToDOM());
//         } catch (error) {
//             console.error(error);
//         }
//     }
    
//     const form = document.getElementById('zipcode');
//     form.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         getWeatherByCity(form.zip.value);
//     });

// Example usage:
// getWeatherByCity('New York'); // Replace 'New York' with the desired city name
// `${URL}?key=${apiKey}&q=${city}&days=7`
