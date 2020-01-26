const utils = require('../constants/utils')

module.exports = ({ method, url }) => {
    return {
        method,
        url,
        headers: {
            'Authorization': utils.token,
            'x-api-key': utils.x_api_key
        }
    }
}