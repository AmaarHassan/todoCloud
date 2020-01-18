const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = require('graphql')

const Task = new GraphQLObjectType({
    name: 'Task',
    fields: () => ({
        taskid: { type: GraphQLString },
        listid: { type: GraphQLString },
        name: { type: GraphQLString },
        parentId: { type: GraphQLString },
        note: { type: GraphQLString },
        startdate: { type: GraphQLInt },
        duedate: { type: GraphQLInt },
        due_date_has_time: { type: GraphQLInt },
        completiondate: { type: GraphQLInt },
        priority: { type: GraphQLInt },
        timestamp: { type: GraphQLInt },
        caldavuri: { type: GraphQLString },
        caldavdata: { type: GraphQLString },
        deleted: { type: GraphQLInt },
        task_type: { type: GraphQLInt },
        type_data: { type: GraphQLString },
        starred: { type: GraphQLInt },
        assigned_userid: { type: GraphQLString },
        recurrence_type: { type: GraphQLInt },
        advanced_recurrence_string: { type: GraphQLString },
        project_startdate: { type: GraphQLInt },
        project_duedate: { type: GraphQLInt },
        project_duedate_has_time: { type: GraphQLInt },
        project_priority: { type: GraphQLInt },
        project_starred: { type: GraphQLInt },
        location_alert: { type: GraphQLString },
        sort_order: { type: GraphQLInt }
    })
})

module.exports = {
    Task
}