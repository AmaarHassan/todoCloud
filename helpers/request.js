const axios = require('axios');

module.exports = async ({ method, url, headers }) => {
    try {
        if (!method) {
            throw new Error('No http method in request options')
        }
        if (!url) {
            throw new Error('No url in request options')
        }
        return await axios({
            method,
            url,
            headers
        })
    } catch (error) {
        throw new Error('Could not make the request')
    }
}