import mysql from "mysql2"


const config = {
	host: 'localhost',
	// port: process.env.MYSQL_PORT || 3306,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE

} as {
	host: string,
	port: number,
	user: string,
	password: string,
	database: string
}


export const connectToDatabase = async (): Promise<mysql.Connection> => {
	return new Promise(async (res, rej) => {
		try {
			const connection = await mysql.createConnection(config);
			console.log("Connection to Database was made")
			console.log(connection)
			return connection
		} catch (error: any) {
			console.error(error.message)
		}
	})
}

async function initDB() {
	const db = await connectToDatabase()
	console.log(typeof db)
	return db
}

export const db = initDB()
