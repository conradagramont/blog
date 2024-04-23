
const { config } = require('../config.js');
const sampleGames = require('../sampledata/games.json');

module.exports = {
    getGamesToday: async function() {
        if (config.useSampleData) {
            // Use the sample data. This is a static JSON file that contains the games for today.
            console.log("Using Sample Game Data");
            return sampleGames;     
        }
        else {

            return new Promise((resolve, reject) => {
                // Call the API to get all the games today
                fetch(`http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1`)
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
    getVenue: async function(venueId) {
        
        return new Promise((resolve, reject) => {
            // Call the API to get the expanded venue information. This includes the location, timezone, team, and league. 
            //  Without the hydrate parameter, we won't get longitude and latitude.
            fetch(`https://statsapi.mlb.com/api/v1/venues/${venueId}?hydrate=location,timezone,team,league&language=en&sportId=1`)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
            
        });
    }
  };
  