const { app } = require('@azure/functions');
const { gamesToday } = require('../components/util.js');

app.http('GetGamesToday', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        
        context.log(`Fetching todays game "${request.url}"`);

        const games = await gamesToday();
        const gamesJson = JSON.stringify(games);
        
        // set the mime type to application/json and return gamesJson in the body
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            body: gamesJson
        };
    }
});
