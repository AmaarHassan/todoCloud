const TasksQueries = require('./tasks')
const ListQueries = require('./list')
const { GraphQLObjectType } = require('graphql')

const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...TasksQueries,
        ...ListQueries
    }
});

module.exports = { RootQuery }