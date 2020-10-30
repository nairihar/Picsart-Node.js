# setup database

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	email varchar(255) NOT NULL,
	last_name TEXT DEFAULT 'Karen'
);




