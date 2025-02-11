import UserService from "../services/user.services.js";

const UserController = {
    reset: (req, res) => {
        UserService.reset();
        res.status(200).send("Database reset");
    },
    init: (req, res) => {
        UserService.init();
        res.status(200).send("Database initialized");
    },
    create: (req, res) => {
        const user = req.body;
        UserService.create(user, (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                console.log(results);
                res.status(200).json({userId : results});
            }
        });
    },
    find: (req, res) => {
        console.log("HIT");
        const userId = req.params.id;
        UserService.find(userId, (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send(results);
            }  
        });
    }
};

export default UserController;