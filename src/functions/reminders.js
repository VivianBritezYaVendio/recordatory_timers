const { app } = require('@azure/functions');
const axios = require('axios');
require('dotenv').config()

const hosts = process.env.URLS_TO_SENDMESSAGE.split(',');
const path = '/task/send-message-after23h';

app.timer('reminders', {
    schedule:' 0 */3 * * * *',
    handler: async (myTimer, context) => {
        context.log('Timer function processed request.');
        for (const host of hosts) {
            const url = `${host}${path}`;
           try {
                const response = await axios.get(url);
                context.log(`GET to ${url} succeeded with status: ${response.status}`);
            } catch (error) {
                context.log(`GET to ${url} failed with error: ${error.message}`);
            } 
        }
    }
});
