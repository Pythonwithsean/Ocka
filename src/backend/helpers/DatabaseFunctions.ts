import mysql from "mysql2"

export async function createUser(id: string, email: string, username: string, password: string, connection: mysql.Connection): Promise<boolean> {
	return new Promise((res) => {
		const query = `INSERT INTO Users (id, email, username, password, role) VALUES (?, ?, ?, ?, ?)`;
		const exisitingUserQuery = `SELECT username from Users WHERE username = ? OR email = ?`
		connection.execute(exisitingUserQuery, [username, email], (err, result) => {
			if ((result as []).length !== 0) {
				console.error("User Exists")
				console.log("User That Exists", result)
				res(false)
			} else {
				connection.execute(query, [id, email, username, password, 'nMember'])
				res(true)
			}
		})
	})

}