const QueryType = require('../types/general/query');
// const queryBuilder = require('../../helpers/queryBuilder');

const {
    GraphQLString
} = require('graphql')

// an object to hold the queries of players
const TasksQueries = {
    // get all players matching the query
    games: {
        type: GraphQLString,
        args: {
            query: { type: QueryType }
        },
        resolve: async (parent, args) => {
            try {
                let query = args.query;
                return "Something Something Something"
                // query = queryBuilder(query);
                // return await gameService.getAll(query);
            } catch (error) {
                return new Error(error)
            }
        }
    }
}


module.exports = TasksQueries