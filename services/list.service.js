const apis = require('../constants/apis');
const option = require('../helpers/option');
const request = require('../helpers/request')

module.exports = class listService {

    async get() {
        try {
            const requestOptions = option({ method: 'get', url: apis.GET_LIST });
            const response = await request(requestOptions);
            return response.data;
        } catch (error) {
            return new Error(error);
        }
    }
}