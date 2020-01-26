const ListType = require('../types/output/list');

const ListService = require('../../services/list.service');
const listService = new ListService();

const {
    GraphQLList
} = require('graphql')

const ListQueries = {
    list: {
        type: new GraphQLList(ListType.ListResponse),
        resolve: async (parent, args) => {
            try {
                return await listService.get();
            } catch (error) {
                return new Error(error)
            }
        }
    }
}


module.exports = ListQueries