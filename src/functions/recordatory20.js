const { app } = require('@azure/functions');

app.timer('recordatory20', {
    schedule: '0 0 */20 * * *',
    handler: async  (myTimer, context) => {
        try {
            const data  = await sendMessage(JSON.parse(process.env.RECORDATORY_20H));
            context.log('Data:', data);
            context.log('Timer function processed request.');
        } catch (error) {
            
        }
    }
});
