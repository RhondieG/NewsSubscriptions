require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "pwknknrlranilf",
    password: "70a45abeec802e456a7b22f255d0f0d306ef44747f5be8adbb53bd7164e0e077",
    localhost: 5432,
    database: "d3sa84srlmjbjg"
});

module.exports = pool;