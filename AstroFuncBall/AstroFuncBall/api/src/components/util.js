const { config } = require('../config.js');
const { getGamesToday, getVenue } = require('./baseball.js');
const { getCityGrid, getForecastByURL } = require('./weather.js');

module.exports = {
    gamesToday: async function() {
        
        console.log("Getting Today's games");
        const games = await getGamesToday();
        
        // Debugging
        // const gamesJson = JSON.stringify(games);
        // console.log(gamesJson);

        // Create a new array to hold the weather for each game
        let weatherArray = [];        
        
        for (let i = 0; i < games.dates[0].games.length; i++) {
            const game = games.dates[0].games[i];
            //const venue = game.venue;
            const homeTeam = game.teams.home.team.name;
            const awayTeam = game.teams.away.team.name;
            const gameDate = game.gameDate;

            console.log("Getting Venue Info for: " + game.venue.id);
            const venueInfo = await getVenue(game.venue.id);
            
            // Debugging
            // const venueInfoJson = JSON.stringify(venueInfo);
            // console.log(venueInfoJson);            
            // console.log("lat: " + venueInfo.venues[0].location.defaultCoordinates.latitude);
            // console.log("long: " + venueInfo.venues[0].location.defaultCoordinates.longitude);

            const lat = venueInfo.venues[0].location.defaultCoordinates.latitude;
            const long = venueInfo.venues[0].location.defaultCoordinates.longitude;
            
            const cityGrid = await getCityGrid(lat, long);
            const forecastURL = cityGrid.properties.forecast;
            const weather = await getForecastByURL(forecastURL);

            // Debugging
            console.log("Getting Weather for: " + forecastURL);
            // const weatherJson = JSON.stringify(weather);
            // console.log(weatherJson);
            
            let gameWeather = {
                gameDate: gameDate,
                home: homeTeam,
                away: awayTeam,
                venue: venueInfo.name,
                weatherToday: weather.properties.periods[0].detailedForecast,
                weatherTodayIcon: weather.properties.periods[0].icon,
                weatherTonight: weather.properties.periods[1].detailedForecast,
                weatherTonightIcon: weather.properties.periods[1].icon,
                sampleData: config.useSampleData
            };

            // Add the game and weather to the array
            weatherArray.push(gameWeather);
        }

        return weatherArray;
        
    },
  };
  