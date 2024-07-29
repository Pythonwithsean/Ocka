CREATE TABLE
	Users (
		id CHAR(36) PRIMARY KEY,
		username VARCHAR(50) NOT NULL UNIQUE,
		password VARCHAR(255) NOT NULL,
		email VARCHAR(100) NOT NULL UNIQUE,
		role VARCHAR(7) NOT NULL,
		dateCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

-- Signup query
INSERT INTO
	Users (id, email, username, password, role)
VALUES
	(?, ?, ?, ?, ?)