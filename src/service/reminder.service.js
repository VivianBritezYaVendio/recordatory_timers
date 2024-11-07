require('dotenv').config()
const path = '/recordatory';
const axios = require('axios');
const headers = {
    'Content-Type': 'application/json',
};


module.exports.sendMessage = async (config) => {
    const promises = config.map(async (entry) => {
        const { url, ...data } = entry;
        const URL = `${url}${path}`;
        console.log(`Enviando a ${URL}`, data);

        try {
            const response = await axios.post(URL, data, { headers });
            return { url, status: response.status, data: response.data, error: null };
        } catch (error) {
            return { url, status: null, data: null, error: error.message };
        }
    });
    const results = await Promise.allSettled(promises);
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log(`Respuesta de ${result.value.url}: ${result.value.status}`);
        } else {
            console.error(`Error al enviar a ${result.reason.url}: ${result.reason.error}`);
        }
    });

    return results;
};