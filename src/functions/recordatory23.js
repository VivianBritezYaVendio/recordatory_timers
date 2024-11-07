const { app } = require('@azure/functions');
const { sendMessage } = require('../service/reminder.service');

app.timer('recordatory23', {
    schedule: '0 0 */23 * * *',
    handler: async (myTimer, context) => {
        context.log('Timer function processed request.');
        try {
            const data = await sendMessage(JSON.parse(process.env.RECORDATORY_23));
            context.log('Data:', data);
        } catch (error) {
            context.log('Error:', error.message);
        }
    }
});
