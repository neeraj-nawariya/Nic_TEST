const Pool = require('pg').Pool;

const pool = new Pool({
    user : "postgres",
    password : "tiger",
    database: "nictest",
    host:"localhost",
    port:5432
});

module.exports = pool;