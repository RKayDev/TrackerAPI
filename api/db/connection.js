import db from 'mysql2';

const connection = db.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: '*nodeJS@235*',
    database: 'node-schema'
});

const mongoConnection = {
    url: 'mongodb://localhost:27017',
    dbName: 'nodejs',
    user: 'rkmenondevops',
    password : 'S6lknFIh7eDwsBgH'
};

export default connection;

