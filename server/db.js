require("dotenv").config();
const Pool = require("pg").Pool;
var pool = null;
if (process.env.DATABASE_URL) { // connect to database from env
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
} else { // connect to localhost database
    pool = new Pool ({
        user: "pwknknrlranilf",
        password: "70a45abeec802e456a7b22f255d0f0d306ef44747f5be8adbb53bd7164e0e077",
        localhost: "localhost",
        database: "d3sa84srlmjbjg"
    });
}

module.exports = pool;