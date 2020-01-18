const uuid = require('uuid/v4');

module.exports = class teamService {

    async get(params) {
        try {
            //            const teams = await teamModel.getAll(query);
            return [{}];
        } catch (error) {
            return new Error(error);
        }
    }
}