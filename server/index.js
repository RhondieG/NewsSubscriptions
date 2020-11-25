const express = require("express");
const app = express();
const pool = require("./db");

// CORS
const cors = require ("cors");
const whitelist = ['http://localhost:3000', 'https://heroku.com/myapp'];
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    if(whitelist.includes(origin))
      return callback(null, true)

      callback(new Error('Not allowed by CORS'));
  }
}
app.use(cors(corsOptions));


//middleware
app.use(express.json());//req.body


//ROUTES//


const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
require("dotenv").config();

const path = require('path');

const PORT = process.env.PORT || '3001'

const initializePassport = require("./passportConfig");

initializePassport(passport);

// Middleware

app.use(express.static(path.join(__dirname, "public")));

// Parses details from a form
app.use(express.urlencoded({ extended: false }));
app.set("port", PORT);


app.use(
  session({
    // Key we want to keep secret which will encrypt all of our information
    secret: process.env.SESSION_SECRET,
    // Should we resave our session variables if nothing has changes which we don't
    resave: false,
    // Save empty value if there is no value which we do not want to do
    saveUninitialized: false
  })
);
// Function inside passport which initializes passport
app.use(passport.initialize());
// Store our variables to be persisted across the whole session. Works with app.use(Session) above
app.use(passport.session());
app.use(flash());

app.get("https://git.heroku.com/newssubscription.git", (req, res) => {
  res.render("index");
});

app.get("/registration", checkAuthenticated, (req, res) => {
  res.render("registration.ejs");
});

app.get("/users/login", checkAuthenticated, (req, res) => {
  // flash sets a messages variable. passport sets the error message
  res.render("login.ejs");
});

app.get("/users/dashboard", checkNotAuthenticated, (req, res) => {
  console.log(req.isAuthenticated());
  res.render("dashboard", { user: req.user.name });
});

app.get("/users/logout", (req, res) => {
  req.logout();
  res.render("index", { message: "You have logged out successfully" });
});

app.post("/registration", async (req, res) => {
  let { username, email, password } = req.body;

  let errors = [];

  console.log({
    username,
    email,
    password
  });

  if (!username || !email || !password  ) {
    errors.push({ message: "Please enter all fields" });
  }

  if (password.length < 6) {
    errors.push({ message: "Password must be a least 6 characters long" });
  }

  if (errors.length > 0) {
    // res.json({ error: "errors" });
    res.render("register", { errors, username, email, password });
  } else {
    hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    // Validation passed
    pool.query(
      `SELECT * FROM users
        WHERE email = $1`,
      [email],
      (error, results) => {
        if (error) {
          console.log(error);
        }
        console.log(results.rows);

        if (results.rows.length > 0) {
          return res.render("register", {
            message: "Email already registered"
          });
        } else {
          pool.query(
            `INSERT INTO users (username, email, password)
                VALUES ($1, $2, $3)
                RETURNING id, password`,
            [username, email, hashedPassword],
            (error, results) => {
              if (error) {
                console.log(error);
              }
              res.json({ success: "ok"});
            }
          );
        }
      }
    );
  }
});

app.post("/login", function(req, res) {
  passport.authenticate('local', function(err, user, info) {
  if (err) {
       res.status(500).send(JSON.stringify({
          'error': "Internal Server Error"
      }));
  }
  if (!user) {
     res.status(401).send(JSON.stringify({
          'error': info.message
      }));
  }
  if (user) {
      res.status(200).send(JSON.stringify({
          'success': "Successfully logged in"
      }));
  }
})(req, res);
});

//Checks to see if book is already saved then saves book's ISBN to user's account
app.post('/users/save_book', checkNotAuthenticated, (req, res) => {
   let isbn = req.body.isbn;

   if(isbn) {
     pool.query(`SELECT isbn FROM faves WHERE user_id=${req.user.id} AND isbn='${isbn}'`)
        .then((response) => {
          console.log(response);
          if(response.rowCount == 0) {

            pool.query(`INSERT INTO faves(user_id, isbn) VALUES (${req.user.id}, '${isbn}')`)
              .then((results) => {
                console.log(results);
                res.send('Book saved successfully');
              })
              .catch((error) => {
                console.log(error);
                res.send("Could not save book");
              })

          }
          else {
            res.send("Book already saved");
          }
        })
     
   }
   else {
      res.send("Enter ISBN number");
   }
});

//Gets all the saved books linked to a user
app.get('/users/save_book', checkNotAuthenticated, (req, res) => {

    pool.query(`SELECT isbn FROM faves WHERE user_id=${req.user.id}`)
     .then((results) => {
       console.log(results);
       res.json(results.rows);
     })
     .catch((error) => {
       console.log(error);
       res.send("Could not retrieve bookshelf");
     })
  
});

//Deletes a book from user's account
app.delete('/users/remove_book/:isbn', checkNotAuthenticated, (req, res) => {
  let isbn = req.params.isbn;
  
  if(isbn) {
    pool.query(`DELETE FROM faves WHERE isbn='${isbn}' AND user_id=${req.user.id}`)
    .then((results) => {
      console.log(results);
      res.json(results.rowCount);
    })
    .catch((error) => {
      console.log(error);
      res.send("Could not remove book");
    })

  }
  
  res.send("Enter ISBN number");

});

//Adds a comment or diary entry to book on user's account
app.post('/users/add_comment', checkNotAuthenticated, (req, res) => {
  let comment = req.body.comment;
  let isbn = req.body.isbn;

  pool.query(`UPDATE faves SET comments='${comment}' WHERE user_id=${req.user.id} AND isbn='${isbn}'`)
    .then((results) => {
      console.log(results);
      res.redirect("/users/login");
    })
    .catch((error) => {
      console.log(error);
      res.end();
    })
});

//Gets diary entry of book from user's account
app.get('/users/comments/:isbn', checkNotAuthenticated, (req, res) => {
  let isbn = req.params.isbn;
  pool.query(`SELECT comments FROM faves WHERE user_id=${req.user.id} AND isbn='${isbn}'`)
    .then((results) => {
      console.log(results);
      res.json(results.rows);
    })
    .catch((error) => {
      console.log(error);
      res.send('Could not retrieve diary entry');
    })
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/dashboard");
  }
  next();
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/users/login");
}



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



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
