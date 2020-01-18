const QueryType = require('../types/general/query');
const taskType = require('../types/output/task');
const countType = require('../types/output/count');
const queryBuilder = require('../../helpers/queryBuilder');

const TasksService = require('../../services/tasks.service');
const taskService = new TasksService();
const CountService = require('../../services/count.service')
const countService = new CountService();

const {
    GraphQLList
} = require('graphql')

const TasksQueries = {
    tasks: {
        type: new GraphQLList(taskType.Task),
        args: {
            query: { type: QueryType }
        },
        resolve: async (parent, args) => {
            try {
                let query = args.query;
                query = queryBuilder(query);
                const tasks = await taskService.getByList(query);
                return tasks.tasks;
            } catch (error) {
                return new Error(error)
            }
        }
    },
    count: {
        type: countType.Count,
        resolve: async (parent, args) => {
            try {
                const count = await countService.get();
                return count
            } catch (error) {
                return new Error(error)
            }
        }
    }
}


module.exports = TasksQueries