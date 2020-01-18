const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require('graphql')

const CountList = new GraphQLObjectType({
    name: 'CountList',
    fields: () => ({
        listid: { type: GraphQLString },
        active: { type: GraphQLInt },
        overdue: { type: GraphQLInt },
        completed: { type: GraphQLInt }
    })
})

const Count = new GraphQLObjectType({
    name: 'Count',
    fields: () => ({
        lists: { type: new GraphQLList(CountList) },
        smart_lists: { type: new GraphQLList(CountList) },
    })
})

module.exports = {
    Count,
    CountList
}