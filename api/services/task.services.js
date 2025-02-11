import Task from "../models/task.model.js";

const TaskService = {
    reset: () => {
        Task.reset();
    }
    ,
    init: () => {
        Task.init();
    }
    ,
    create: (task, callback) => {
        Task.create(task, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
    find: (taskId, callback) => {
        Task.find(taskId, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
    findAllByUserId: (userId, callback) => {
        Task.findAllByUserId(userId, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }
};

export default TaskService;