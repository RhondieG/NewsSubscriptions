CREATE TABLE posts(
    post_id SERIAL PRIMARY KEY,
    user_name VARCHAR (255) NOT NULL,
    post VARCHAR (2000)
);