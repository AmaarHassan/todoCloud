const {
    GraphQLObjectType,
    GraphQLString,
} = require('graphql')

const Game = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
        name: { type: GraphQLString },
        year: { type: GraphQLString },
        poster: { type: GraphQLString },
        uuid: { type: GraphQLString }
    })
})

module.exports = {
    Game
}