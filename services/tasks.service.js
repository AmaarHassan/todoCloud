const axios = require('axios');
const apis = require('../constants/apis');
const utils = require('../constants/utils')

module.exports = class tasksService {

    async getByList(query) {
        try {
            if (!query.params) {
                throw new Error('No params provided')
            }
            if (!query.params.listid) {
                throw new Error('No list id provided')
            }

            const { listid } = query.params;
            let newurl = apis.GET_LIST_TASKS;
            const param = newurl.match(utils.regexForParams);
            if (param) {
                newurl = newurl.replace(param, [listid])
            }

            const response = await axios({
                method: 'get',
                url: newurl,
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