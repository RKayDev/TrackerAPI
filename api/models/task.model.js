import connection from "../db/connection.js"

const Task = {
    init: () => {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS tasks (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT,
                name VARCHAR(255),
                description VARCHAR(255),
                completed BOOLEAN,
                FOREIGN KEY (user_id) REFERENCES users(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
            )
        `;
        connection.query(createTableQuery, (error) => {
            if (error) {
                console.error('Error creating tasks table:', error);
            }
        });
    },
    reset: () => {
        const query = 'DROP TABLE IF EXISTS tasks';
        connection.query(query, (err) => {
            if (err) {
                console.log(err);
            }
        });
        Task.init();
    },
    create: (task, callback) => {
        const sql = 'INSERT INTO tasks (user_id, name, description, completed) VALUES (?, ?, ?, ?)';
        const values = [task.user_id, task.name, task.description, false];
        
        connection.query(sql, values, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result.insertId);
        });
    },
    find: (taskId, callback) => {
        const sqlQuery = 'SELECT * FROM tasks WHERE id = ?';
        connection.query(sqlQuery, [taskId], (error, results) => {
            if (error) {
                return callback(error);
            }
            if (results.length === 0) {
                return callback(null, null);
            }
            return callback(null, results[0]);
        });
    },
    findAllByUserId: (userId, callback) => {
        const query = 'SELECT * FROM tasks WHERE user_id = ?';
        connection.query(query, [userId], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results);
        });
    },
}

export default Task;
