require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "postgres",
    password: "password",
    localhost: 5432,
    database: "chatterbox"
});

module.exports = pool;