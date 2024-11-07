const { app } = require('@azure/functions');
const {sendMessage} = require('../service/reminder.service');

app.timer('recordatory1H', {
    schedule: '0 * */1 * * *',
    handler:async (myTimer, context) => {
        context.log('Timer function processed request.');
        try {
            const data  = await sendMessage(JSON.parse(process.env.RECORDATORY_1H));
            context.log('Data:', data);
        } catch (error) {
            context.log('Error:', error.message);
        }
    }
});
