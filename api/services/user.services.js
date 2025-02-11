import User from "../models/user.model.js";

const UserService = {
    reset: () => {
        User.reset();
    }
    ,
    init: () => {
        User.init();
    }
    ,
    create: (user, callback) => {
        User.create(user, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
    find: (userId, callback) => {
        User.find(userId, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }
};

export default UserService;