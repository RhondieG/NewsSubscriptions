const express = require("express");
const app = express();
const cors = require ("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());//req.body


//ROUTES//

//create a user


//create a post for user

app.post("/posts", async (req,res) => {
    try {
        const { post } = req.body;
        const newPost = await pool.query ("INSERT INTO posts (post) VALUES($1)",
        [post]
        );

        const user_name = pool.query("INSERT INTO posts (user_name) VALUES ($1)",
        [user_name]
        );

        res.json(newPost)
        res.json(user_name)

    } catch (err) {
        console.error(err.message);
    }
});

//get all post for user

//get a post for user

//update a post for user



app.listen(5000, () => {
    console.log("server has start on PORT 3000");
}) 