import TaskService from "../services/task.services.js";

const TaskController = {
    reset: (req, res) => {
        TaskService.reset();
        res.status(200).send("Database reset");
    },
    init: (req, res) => {
        TaskService.init();
        res.status(200).send("Database initialized");
    },
    create: (req, res) => {
        const task = req.body;
        TaskService.create(task, (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).json({taskId : results});
            }
        });
    },
    find: (req, res) => {        
        const taskId = req.params.id;
        TaskService.find(taskId, (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send(results);
            }  
        });
    },
    findAllByUserId: (req, res) => {
        const userId = req.params.id;
        TaskService.findAllByUserId(userId, (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send(results);
            }  
        });
    }
};

export default TaskController;
