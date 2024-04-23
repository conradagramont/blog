// https://www.weather.gov/documentation/services-web-api
// https://api.weather.gov/points/{latitude},{longitude}
// Padres Petco Park: https://api.weather.gov/points/32.707861,-117.157278

const { config } = require('../config.js');
const { sampleWeather } = require('../sampledata/weather.json');

module.exports = {

    getCityGrid: async function(lat, long) {  
        const weatherUrl = `https://api.weather.gov/points/${lat},${long}`;

        return new Promise((resolve, reject) => {
            // call the API to get the reference point for the city
            fetch(weatherUrl)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
        });
    },
    getForecastByURL: async function(forecastUrl) {

        if (config.useSampleData) {
            // Use the sample data. Select the item from the array that matches the URL
            
            // Debugging
            console.log("Using Sample Weather Data");
            console.log("forecastUrl: " + forecastUrl);
            //console.log("sampleWeather Json: " + forecastUrl);
            //const sampleWeatherJson = JSON.stringify(sampleWeather);
            //console.log(sampleWeatherJson);            
           // const forecast = sampleWeather.find(item => item.url === "https://api.weather.gov/gridpoints/OKX/35,41/forecast");

            const forecast = sampleWeather.find(item => item.url === forecastUrl);
            const forecastResponse = forecast.response;
            
            return forecastResponse;            
        }
        else {
            // Call the API directly
            return new Promise((resolve, reject) => {
                // call the API to get the forecast for the city based on the URL provided
                fetch(forecastUrl)
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
            });
        }
    },
  };
  