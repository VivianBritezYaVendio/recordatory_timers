const { app } = require('@azure/functions');
const { sendMessage } = require('../service/reminder.service');
require('dotenv').config()
const decisionTree = JSON.parse(process.env.PAYLOAD_TREE);


app.timer('reminders', {
    schedule: "0 0 */12 * * *",
    handler: async (myTimer, context) => {
        const config = decisionTree

        context.log('Timer function processed request =>');
        try {
           const data =  await sendMessage(config);
              context.log('Data:', data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
});
