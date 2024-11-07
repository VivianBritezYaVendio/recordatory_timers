const { app } = require('@azure/functions');
const { sendMessage } = require('../service/reminder.service');
const decisionTree = JSON.parse(process.env.RECORDATORY_30);
app.timer('recordatory', {
    schedule: '0 */30 * * * *',
    handler: async  (myTimer, context) => {
        const config = decisionTree
        context.log('Timer function processed request.');
        try {
            const data = await sendMessage(config);
            context.log('Data:', data);
        } catch (error) {
          console.log('Error:', error.message);  
        }
    }
});
