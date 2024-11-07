const { app } = require('@azure/functions');
const { sendMessage } = require('../service/reminder.service');

app.timer('recordatory_3h', {
    schedule: '0 0 */3 * * *',
    handler: async (myTimer, context) => {
        context.log('Timer function processed request.');
        try {
            const data = await sendMessage(JSON.parse(process.env.RECORDATORY_3H));
            context.log('Data:', data);
        } catch (error ) {
            console.log(error)
        }
    }
});
