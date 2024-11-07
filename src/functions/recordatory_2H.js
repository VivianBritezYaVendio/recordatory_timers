const { app } = require('@azure/functions');
const { sendMessage } = require('../service/reminder.service');

app.timer('recordatory_2H', {
    schedule: '0 0 */2 * * *',
    handler: async  (myTimer, context) => {
        context.log('Timer function processed request.');
        try {
           const data  = await sendMessage(JSON.parse(process.env.RECORDATORY_2H));
            context.log('Data:', data);
        } catch (error) {
            console.log('Error:', error.message);
        }
    }
});
