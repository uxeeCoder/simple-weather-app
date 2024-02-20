// const URL = "https://api.weatherapi.com/v1/forecast.json?key=a47d1db11e5f4905b0850215241702&q=11001&days=7";

// class Weather {
//     constructor(city, day) {
//         this.city = city;
//         this.day = day.date;
//         this.temperature = day.day.avgtemp_f;
//         this.forecast = day.day.condition.text;
//     }

//     displayToDOM() {
//         const weatherContainer = document.getElementById('dailyWeather');
//         weatherContainer.innerHTML += `
//             <div class="weather-card">
//                 <h2>${this.city}</h2>
//                 <p>${this.day}</p>
//                 <p>${this.forecast}</p>
//                 <p>${this.temperature}°F</p>
//             </div>
//         `;
//     }
// }

// async function getWeatherByCity(city) {
//     try {
//         const response = await fetch(URL);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const weatherData = await response.json();
//         const cityName = weatherData.location.name;
//         const days = weatherData.forecast.forecastday.map(day => new Weather(cityName, day));
//         days.forEach(day => day.displayToDOM());
//     } catch (error) {
//         console.error(error);
//     }
// }

// const form = document.getElementById('zipcode');
// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     getWeatherByCity(form.zip.value);
// });
