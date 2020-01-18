const TasksQueries = require('./tasks')
const { GraphQLObjectType } = require('graphql')

const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...TasksQueries,
    }
});

module.exports = { RootQuery }