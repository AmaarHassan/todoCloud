const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require('graphql')

const ListResponse = new GraphQLObjectType({
    name: 'ListResponse',
    fields: () => ({
        list: { type: ListType },
        settings: { type: SettingsType }
    })
})

const ListType = new GraphQLObjectType({
    name: 'List',
    fields: () => ({
        listid: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        creator: { type: GraphQLString },
        cdavUri: { type: GraphQLString },
        cdavTimeZone: { type: GraphQLString },
        deleted: { type: GraphQLInt },
        timestamp: { type: GraphQLInt },
        task_timestamp: { type: GraphQLInt },
        notification_timestamp: { type: GraphQLInt },
        taskito_timestamp: { type: GraphQLInt }
    })
})

const SettingsType = new GraphQLObjectType({
    name: 'Settings',
    fields: () => ({
        listid: { type: GraphQLString },
        userid: { type: GraphQLString },
        color: { type: GraphQLString },
        timestamp: { type: GraphQLInt },
        cdavOrder: { type: GraphQLString },
        cdavColor: { type: GraphQLString },
        cdavOrder: { type: GraphQLString },
        sync_filter_tasks: { type: GraphQLInt },
        task_notifications: { type: GraphQLInt },
        user_notifications: { type: GraphQLInt },
        comment_notifications: { type: GraphQLInt },
        notify_assigned_only: { type: GraphQLInt },
        hide_dashboard: { type: GraphQLInt },
        icon_name: { type: GraphQLString },
        sort_order: { type: GraphQLInt },
        sort_type: { type: GraphQLInt },
        default_due_date: { type: GraphQLInt }
    })
})

module.exports = {
    ListType,
    ListResponse,
    SettingsType
}