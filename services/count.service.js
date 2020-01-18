const axios = require('axios');
const apis = require('../constants/apis');
const utils = require('../constants/utils');

module.exports = class tasksService {

    async get() {
        try {
            const response = await axios({
                method: 'get',
                url: apis.GET_COUNT,
                headers: {
                    'Authorization': utils.token,
                    'x-api-key': utils.x_api_key
                }
            })
            return response.data;
        } catch (error) {
            return new Error(error);
        }
    }    
}