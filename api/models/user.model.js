import connection from "../db/connection.js"

const User = {
    init: () => {
        const query = 'CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255))';
        connection.query(query, (err) => {
            if (err) {
                console.log(err);
            }
        });
    },
    reset: () => {
        const query = 'DROP TABLE IF EXISTS users';
        connection.query(query, (err) => {
            if (err) {
                console.log(err);
            }
        });
        User.init();
    },
    create: (user, callback) => {
        const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        connection.query(query, [user.name, user.email, user.password], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },
    find: (userId, callback) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        connection.query(query, [userId], (err, results) => {
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback(null, null);
            }
            callback(null, results[0]);
        });
    }
};

export default User;
